import path from "node:path"
import {isAsyncSyncExpandableFilePath} from "./isAsyncSyncExpandableFilePath.ts"
import {expandAsyncSyncVariantName} from "./expandAsyncSyncVariantName.ts"

export function expandAsyncSyncVariantFilePath(
	filePath: string
): [string, string] {
	if (!isAsyncSyncExpandableFilePath(filePath)) {
		throw new Error(
			`expandAsyncSyncVariantFilePath: unexpandable path '${filePath}'.`
		)
	}

	const baseDir = path.dirname(filePath)

	// remove __
	let fileName = path.basename(filePath).slice(2)

	// remove .as.mts
	fileName = fileName.slice(0, -(`.as.mts`.length))

	const [asyncFileName, syncFileName] = expandAsyncSyncVariantName(fileName)

	return [
		path.join(baseDir, `${asyncFileName}.mts`),
		path.join(baseDir, `${syncFileName}.mts`)
	]
}

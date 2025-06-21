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

	// remove .as.ts
	fileName = fileName.slice(0, -(`.as.ts`.length))

	const [asyncFileName, syncFileName] = expandAsyncSyncVariantName(fileName)

	return [
		path.join(baseDir, `${asyncFileName}.ts`),
		path.join(baseDir, `${syncFileName}.ts`)
	]
}

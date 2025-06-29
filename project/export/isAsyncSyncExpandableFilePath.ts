import path from "node:path"
import {isAsyncSyncExpandableName} from "./isAsyncSyncExpandableName.ts"

export function isAsyncSyncExpandableFilePath(filePath: string): boolean {
	const fileName = path.basename(filePath)

	if (!fileName.startsWith("__")) return false
	if (!isAsyncSyncExpandableName(fileName)) return false

	if (fileName.endsWith(".as.ts")) return true

	return false
}

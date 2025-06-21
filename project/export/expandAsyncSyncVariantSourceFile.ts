import fs from "node:fs"

import {expandAsyncSyncVariantSourceCodeFromString} from "#~src/expandAsyncSyncVariantSourceCodeFromString.ts"

export function expandAsyncSyncVariantSourceFile(
	sourcePath: string,
	variant: "async" | "sync"
): string {
	const contents = fs.readFileSync(sourcePath).toString()

	return expandAsyncSyncVariantSourceCodeFromString(
		contents, variant, sourcePath
	)
}

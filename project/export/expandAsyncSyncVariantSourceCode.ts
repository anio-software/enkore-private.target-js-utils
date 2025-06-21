import {expandAsyncSyncVariantSourceCodeFromString} from "#~src/expandAsyncSyncVariantSourceCodeFromString.ts"

export function expandAsyncSyncVariantSourceCode(
	code: string,
	variant: "async"|"sync",
	fileName?: string
): string {
	return expandAsyncSyncVariantSourceCodeFromString(code, variant, fileName)
}

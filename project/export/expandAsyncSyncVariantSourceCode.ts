import {expandAsyncSyncVariantSourceCodeFromString} from "#~src/expandAsyncSyncVariantSourceCodeFromString.mts"

export function expandAsyncSyncVariantSourceCode(
	code: string,
	variant: "async"|"sync",
	fileName?: string
): string {
	return expandAsyncSyncVariantSourceCodeFromString(code, variant, fileName)
}

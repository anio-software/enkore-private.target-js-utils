import type {TargetIdentifier} from "#~src/_getTargetIdentifiers.mts"

export function isWebTarget(target: TargetIdentifier): boolean {
	if (target === "js-web"     ||
	    target === "js-hybrid"  ||
	    target === "jsx-web"    ||
	    target === "jsx-hybrid"   ) {
		return true
	}

	return false
}

import type {TargetIdentifier} from "@anio-software/enkore-private.spec/primitives"

export function isWebTarget(target: TargetIdentifier): boolean {
	if (target === "js-web"     ||
	    target === "js-hybrid"  ||
	    target === "jsx-web"    ||
	    target === "jsx-hybrid"   ) {
		return true
	}

	return false
}

import type {TargetIdentifier} from "@anio-software/enkore-private.spec/primitives"

export function isReactTarget(target: TargetIdentifier): boolean {
	if (
//	    target === "jsx-none"   ||
	    target === "jsx-web"    ||
//	    target === "jsx-node"   ||
	    target === "jsx-hybrid"   ) {
		return true
	}

	return false
}

import type {TargetIdentifier} from "@anio-software/enkore-private.spec/primitives"

export function isNodeTarget(target: TargetIdentifier): boolean {
	if (target === "js-node"    ||
	    target === "js-hybrid"  ||
//	    target === "jsx-node"   ||
	    target === "jsx-hybrid"   ) {
		return true
	}

	return false
}

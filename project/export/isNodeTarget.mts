import type {TargetIdentifier} from "#~src/_getTargetIdentifiers.mts"

export function isNodeTarget(target: TargetIdentifier): boolean {
	if (target === "js-node"    ||
	    target === "js-hybrid"  ||
	    target === "jsx-node"   ||
	    target === "jsx-hybrid"   ) {
		return true
	}

	return false
}

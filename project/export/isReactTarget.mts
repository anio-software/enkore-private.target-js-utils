import type {TargetIdentifier} from "#~src/_getTargetIdentifiers.mts"

export function isReactTarget(target: TargetIdentifier): boolean {
	if (target === "jsx-none"   ||
	    target === "jsx-web"    ||
	    target === "jsx-node"   ||
	    target === "jsx-hybrid"   ) {
		return true
	}

	return false
}

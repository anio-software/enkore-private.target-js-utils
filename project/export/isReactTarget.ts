import type {TargetIdentifier} from "@anio-software/enkore-private.spec/primitives"

const reactTargets = [
//	"jsx-none",
	"jsx-web",
//	"jsx-node",
	"jsx-hybrid"
]

export function isReactTarget(target: TargetIdentifier): boolean {
	return reactTargets.includes(target)
}

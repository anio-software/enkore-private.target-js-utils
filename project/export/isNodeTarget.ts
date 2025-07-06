import type {TargetIdentifier} from "@anio-software/enkore-private.spec/primitives"

const nodeTargets = [
	"js-node",
	"js-hybrid",
	"js-hybrid-lite",
//	"jsx-node",
	"jsx-hybrid"
]

export function isNodeTarget(target: TargetIdentifier): boolean {
	return nodeTargets.includes(target)
}

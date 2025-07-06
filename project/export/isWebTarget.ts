import type {TargetIdentifier} from "@anio-software/enkore-private.spec/primitives"

const webTargets = [
	"js-web",
	"js-hybrid",
	"js-hybrid-lite",
	"jsx-web",
	"jsx-hybrid"
]

export function isWebTarget(target: TargetIdentifier): boolean {
	return webTargets.includes(target)
}

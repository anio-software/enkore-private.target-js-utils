//
// NB: use primitives package once migrated to new enkore version
//
export type TargetIdentifiers = [
	"c",
	"js-none",
	"js-web",
	"js-node",
	"js-hybrid",
	"jsx-none",
	"jsx-web",
	"jsx-node",
	"jsx-hybrid"
]

export type TargetIdentifier = TargetIdentifiers[number]

export function _getTargetIdentifiers(): TargetIdentifiers {
	return [
		"c",
		"js-none",
		"js-web",
		"js-node",
		"js-hybrid",
		"jsx-none",
		"jsx-web",
		"jsx-node",
		"jsx-hybrid"
	]
}

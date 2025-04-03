import {defineConfig} from "enkore"
import {defineTargetConfig} from "@enkore-target/js-node"

export default defineConfig({
	target: defineTargetConfig({
		createTypesPackage: {
			orgName: "@enkore-types"
		}
	})
})

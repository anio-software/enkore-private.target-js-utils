import {defineConfig} from "enkore"
import {defineRealmConfig} from "@enkore/realm-js"

export default defineConfig({
	realm: {
		name: "js",
		config: defineRealmConfig({
			runtime: "node",
			createTypesPackage: {
				orgName: "@enkore-types"
			}
		})
	}
})

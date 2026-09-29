import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
      "no-duplicate-imports": "off",
      "no-use-before-define": "error",
      "constructor-super": "error",
      "no-var": "warn",
      "no-unreachable": "warn",
      "no-extra-boolean-cast": "warn",
		},
	},
]);


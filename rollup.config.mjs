import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import path from "node:path";
import url from "node:url";

const isWatching = !!process.env.ROLLUP_WATCH;

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
	input: "src/plugin.ts",
	output: {
		file: "com.geekyeggo.goveecontroller.sdPlugin/bin/plugin.js",
		sourcemap: isWatching,
		sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
			return url.pathToFileURL(path.resolve(path.dirname(sourcemapPath), relativeSourcePath)).href;
		}
	},
	plugins: [
		typescript({
			mapRoot: isWatching ? "./" : undefined
		}),
		nodeResolve({
			browser: false,
			exportConditions: ["node"],
			preferBuiltins: true
		}),
		commonjs(),
		json(),
		!isWatching && terser(),
		{
			name: "emit-module-package-file",
			generateBundle() {
				this.emitFile({ fileName: "package.json", source: `{ "type": "module" }`, type: "asset" });
			}
		}
	]
};

export default config;

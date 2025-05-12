// rollup.config.js
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

// JS & CSS bundle
const jsBundle = {
  input: "src/index.tsx",
  output: [
    { file: "dist/index.cjs", format: "cjs", sourcemap: true },
    { file: "dist/index.esm.js", format: "esm", sourcemap: true },
  ],
  external: ["react", "react-dom"],
  plugins: [
    nodeResolve(),
    commonjs(),
    esbuild({ target: "es2018", tsconfig: "tsconfig.json" }),
    postcss({ extract: "marquee.css", minimize: true, sourceMap: true }),
  ],
};

// Type declarations bundle
const dtsBundle = {
  input: "src/index.tsx",
  output: { file: "dist/index.d.ts", format: "es" },
  plugins: [dts()],
  // Ignore style imports so Rollup won't try to parse SCSS as JS
  external: [/\.scss$/],
};

export default [jsBundle, dtsBundle];

// rollup.config.js
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.tsx",
  output: [
    { file: "dist/index.cjs", format: "cjs", sourcemap: true },
    { file: "dist/index.esm.js", format: "esm", sourcemap: true },
  ],
  external: ["react", "react-dom"], // peer deps
  plugins: [
    nodeResolve(),
    commonjs(),
    esbuild({ target: "es2018", tsconfig: "tsconfig.json" }),
    postcss({
      extract: "marquee.css",
      minimize: true,
      sourceMap: true,
    }),
  ],
};

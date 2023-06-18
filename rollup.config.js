import typescript from "@rollup/plugin-typescript";

const DIST_DIRECTORY = "dist";
const format = "esm";
const plugins = [typescript()];

export default {
  input: "src/index.ts",
  output: {
    dir: DIST_DIRECTORY,
    format,
  },
  plugins,
  external: ['zod'] 
};

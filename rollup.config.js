import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from '@rollup/plugin-node-resolve';

const DIST_DIRECTORY = "dist";
const format = "esm";
const plugins = [typescript(),nodeResolve()];

export default {
  input: "src/index.ts",
  output: {
    dir: DIST_DIRECTORY,
    format,
  },
  plugins,
};

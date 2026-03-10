import { defineConfig } from 'tsdown'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { version: SDK_VERSION } = require('./package.json')

export default defineConfig({
  entry: ['./src/index.ts', './src/stream.ts', './src/state.ts', './src/telemetry.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [],
  minify: false,
  treeshake: true,
  define: {
    __SDK_VERSION__: JSON.stringify(SDK_VERSION),
  },
})

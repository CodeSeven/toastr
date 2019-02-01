import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

export default {
  input: 'src/Toastr.ts',
  output: [
    {
      file: pkg.main,
      name: 'toastr',
      format: 'umd',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: ['lodash'],
  watch: {
    include: 'src/**',
  },
  plugins: [
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    resolve({
      browser: true,
    }),
    sourceMaps(),

    postcss({
      sourceMap: true,
      extract: pkg.style,
      minimize: true,
    }),
  ],
};

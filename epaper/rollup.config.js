// Rollup plugins
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

const plugins = [
  typescript(),
  babel({
    exclude: 'node_modules/**'
  }),
  uglify()
];

export default [
  {
    input: './src/template.ts',
    output: {
      file: './tspublic/epaper-template2.js',
      format: 'iife',
      name: 'epaper'
    },
    plugins
  }
];

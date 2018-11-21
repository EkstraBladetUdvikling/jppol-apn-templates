// Rollup plugins
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
  typescript(),
  babel({
    exclude: 'node_modules/**'
  })
];

export default [
  {
    input: './src/template.ts',
    output: {
      file: './tspublic/epaper-template.js',
      format: 'iife',
      name: 'epaper'
    },
    plugins
  }
];

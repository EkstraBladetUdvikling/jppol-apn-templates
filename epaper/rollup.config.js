// Rollup plugins
import typescript from 'rollup-plugin-typescript2';

const plugins = [typescript()];

export default [
  {
    input: './src/index.ts',
    output: {
      file: './tspublic/comments.js',
      format: 'iife',
      name: 'comments'
    },
    plugins
  }
];

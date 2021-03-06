import babel from 'rollup-plugin-babel'
import sourceMaps from 'rollup-plugin-sourcemaps'
import nodeResolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import external from 'rollup-plugin-auto-external'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const banner = require('./banner.config')
const customBanner = `/* ${banner} */`
const globals = {
    react: 'React',
    'dragscroll-ts': 'DragScroll',
}

export default {
    input: 'src/DragScroll.tsx',
    plugins: [
        nodeResolve({
            browser: true,
        }),
        json(),
        typescript({
            useTsconfigDeclarationDir: true,
        }),
        commonjs(),
        resolve(),
        babel({
            exclude: 'node_modules/**',
        }),
        external(),
        peerDepsExternal(),
        terser(),
        sourceMaps(),
    ],
    output: [
        {
            file: pkg.main,
            format: 'es',
            banner: customBanner,
            sourcemap: true,
            globals,
        },
    ],
}

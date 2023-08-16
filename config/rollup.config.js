import ts from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const extensions = ['.ts', 'less']
export default defineConfig({
    input: './src/page/player.ts', //入口
    //插件
    plugins: [
        //ts插件让rollup读取ts文件
        ts(),
        nodeResolve({
            extensions,
        }),
        babel(),
        commonjs(),
        postcss({
            plugins: [autoprefixer()],
        }),
    ],
})


// Rollup 和 webpackRollup 和 webpack 都是 JavaScript 的模块打包工具，它们的主要目标是将多个模块打包成一个或多个最终的 JavaScript 文件。然而，它们在一些方面有一些区别。
// 下面是 Rollup 和 webpack 的一些区别：
// 打包原理：Rollup 采用的是静态分析的打包方式，它会分析模块的依赖关系，并尽可能地将多个模块合并为更少的文件。这种方式可以产生更小、更高效的输出文件。而 webpack 采用的是动态打包方式，它使用一个称为 "chunk" 的概念，将模块按需加载，并将它们分成多个块（chunks）来处理。
// 生态系统：webpack 是更广泛使用的工具，它有更大的生态系统和更多的插件和加载器可供选择。这使得 webpack 在处理复杂的项目和各种场景时更加灵活和强大。相比之下，Rollup 的生态系统相对较小，适用于更简单的项目和库的打包。
// 目标环境：Rollup 更适合用于构建库和组件，它生成的代码更加干净和紧凑，适合用于公共库的发布。而 webpack 更适合用于构建应用程序，它具有更丰富的功能，如代码拆分、热模块替换等，适合构建复杂的前端应用。
// 资源处理：webpack 除了打包 JavaScript 模块外，还可以处理和打包其他类型的资源文件，如 CSS、图片、字体等。它可以使用各种加载器来处理这些资源。相比之下，Rollup 更专注于 JavaScript 模块的打包，对其他类型的资源处理相对有限。
// 代码拆分：webpack 内置了代码拆分的功能，可以将代码拆分为多个块，实现按需加载。相比之下，Rollup 需要借助第三方插件来实现代码拆分的功能。
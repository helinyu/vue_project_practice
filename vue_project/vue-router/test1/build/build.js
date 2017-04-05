require('./check-versions')()
// 检查版本

process.env.NODE_ENV = 'production'
// node的环境 设置为生产环境

var ora = require('ora') // HIA不知道是什么
var rm = require('rimraf') // 删除文件（夹）
var path = require('path')  // 路径
var chalk = require('chalk') // 校对 字符串
var webpack = require('webpack') // 打包工具
var config = require('../config') // 引入了configure里的index.js 文件（不是所有）
var webpackConfig = require('./webpack.prod.conf') // 这个应该是对应的内容
// 上面包括了一些必要的库，ora 、rm 、path （路径）、 chalk 、webpack打包工具
// config 配置文件 webpackConfig  打包配置文件

var spinner = ora('building for production...')
spinner.start()
// const spinner = ora('building for production...').start();

// setTimeout(() => {
//     spinner.color = 'blue';
//     spinner.text = 'Loading rainbows';
// }, 1000);

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) 
    spinner.succeed([text])
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})

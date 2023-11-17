#!/usr/bin/env node
const { program } = require('commander')
const createCommand = require('./lib/core/create')
const helpOptions = require('./lib/core/help')

// 指定版本号
program.version(require('./package.json').version, '-v, --version')

// 增加自己的options
helpOptions()
createCommand()

program.parse(process.argv)

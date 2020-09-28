#!/usr/bin/env node
var captain = require('./index')
console.clear()

// var fg = require('fast-glob')

// let packages = fg.sync(['**/package.json'], { ignore: "node_modules"})
// console.log(packages)

// packages.forEach((p) => {
//   let package = require('./' + p)
//   console.log(package)
// })

// Grab args
captain(...process.argv.slice(2))
#!/usr/bin/env node
var inquirer = require('inquirer')
var uid = require('uid')
var kleur = require('kleur')
const path = require('path');
const fs = require('fs')

let question = (o) => ({ name: uid(), ...o })


async function start(args){
  var flow;
  if(!args.length){
    // No argument supplied. Ask which command they'd like to do
    let q = question({
      type: "list",
      message: "Choose a command",
      choices: fs.readdirSync(path.join(process.cwd(),`/to`)).map(f => path.parse(f).name)
    })
    let answers = await inquirer.prompt([ q ])
    flow = require(path.join(process.cwd(), `/to/${answers[q.name]}.js`))()
  } else {
    // We can assume first argument is which command they'd like to do
    let which = args.splice(0,1)
    flow = require(path.join(process.cwd(),`/to/${which}.js`))(...args)
  }
  let val = await flow.next();

  (async function interact(){
    if(!val.done){
      let q = question(val.value)
      inquirer.prompt([ q ])
        .then(async (answers) => {
          val = await flow.next(answers[q.name])
          interact()
        })
        .catch((e) => {
          console.error(kleur.red(e));
        })
    }
  })()
}

// Grab args
start(process.argv.slice(2))

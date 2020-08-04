#!/usr/bin/env node
var inquirer = require('inquirer')
var uid = require('uid')
var kleur = require('kleur')

let question = (o) => ({ name: uid(), ...o })

async function start(args){
  var flow;
  if(!args.length){
    // No argument supplied. Ask which command they'd like to do
  } else {
    // We can assume first argument is which command they'd like to do
    let which = args.splice(0,1)
    flow = require(`./to/${which}.js`)(...args)
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

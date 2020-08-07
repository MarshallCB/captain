var inquirer = require('inquirer')
var uid = require('uid')
var kleur = require('kleur')
var cfonts = require('cfonts')
const path = require('path');
const fs = require('fs')

let question = (o) => ({ name: uid(), ...o })
// TODO: also export a function that works as an import and direct call captain(command, params, answers)

// TODO: flag for where to look for files (local, like for npx captain "file" --> local file no matter where called from. m4r.sh case is weird)

// TODO: allow for full import of a flow without the need to add a flow file to /to

// TODO: try converting promise structure to async/await

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
    while(!val.done){
      let q = question(val.value)
      let answer = await inquirer.prompt([ q ])
      // TODO: display loading animation here
      val = await flow.next(answer[q.name])
    }
  })()
}

module.exports = start

// var prompts = require('prompts')
var uid = require('uid')
// var cfonts = require('cfonts')
// const { log } = require('essential-md')
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')

let promptify = (type, props) => {
  let obj = { name: uid() }
  if(true){
    obj = { ...obj, type, ...props }
  }
  return obj
}

let inquiry = async function(prompt){
  return await inquirer.prompt([ prompt ])
}

let collect = async (type, props) => {
  let prompt = promptify(type, props)
  // let answer = await prompts(prompt)
  let answer = await inquiry(prompt)
  return answer[prompt.name]
}

let interface = async (type, props) => {
  if(type.includes("collect/")){
    return await collect(type.substring("collect/".length), props)
  } else{
    console.log("NOT VALID")
  }
}

async function argToFlow(arg, params = null){
  var flow, where;
  // If generator function is passed, use that
  if(typeof arg === "function"){
    return arg();
  }
  // Else, treat arg as a filepath string
  if(!arg.length){
    // No argument supplied. Ask which command they'd like to do
    where = await interface("collect/text", {
      message: "Type a filepath"
    })
  } else {
    // We can assume first argument is which command they'd like to do
    where = arg
  }
  try{
    console.log("WHERE")
    console.log(where);
    return require(`${where}`)(...params)
  } catch(e){
    if(e.code === "MODULE_NOT_FOUND"){
      let i = e.message.indexOf('Cannot find module')
      let segments = e.message.substr(i).split('\'')
      console.log(`Module require error: ${segments[1]}`)
      if(e.requireStack.length > 2){
        // Path dependency is uninstalled
        console.log(`The flow "${where}" requires "${segments[1]}", which could not be found.`)
        console.log(`Try: npm i ${segments[1]}`)
      } else {
        // Path provided is invalid
        console.log(`The flow "${where}" does not exist`)
      }
    } else {
      console.log(e)
    }
    return;
  }
}

module.exports = async function captain(arg, ...params){
  try {
    var flow = await argToFlow(arg, params)
    let val = await flow.next();
    while(!val.done){
      let ans = await interface(...val.value)
      // TODO: display loading animation here
      val = await flow.next(ans)
    }
    return val.value;
  } catch(e){
    console.log("Error")
    console.log(e)
  }
  
}

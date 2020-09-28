<div align="center">
  <img src="https://github.com/marshallcb/captain/raw/master/captain.png" alt="Captain" width="100" />
</div>

<h1 align="center">captain</h1>
<div align="center">
  <a href="https://npmjs.org/package/captain">
    <img src="https://badgen.now.sh/npm/v/captain" alt="version" />
  </a>
</div>

<div align="center">Coordinate custom CLI commands for ultimate dev productivity</div>
<h3 align="center">:construction: Work in progress :construction:</h3>

<div align="center">
  <a href="#Overview"><b>Overview</b></a> | 
  <a href="#Setup"><b>Setup</b></a> | 
  <a href="#API"><b>API</b></a> | 
  <a href="#Examples"><b>Examples</b></a> | 
  <a href="#About"><b>About</b></a>
</div>

---

# Overview

## Features

- Curate your own menu of command line workflows
- Automate common tasks (project scaffolding, bulk ops, git flows)
- Sync workflows across computers w/ GitHub
- Community workflows [Template]() [Our Favorites]()

## How it works

- Write `[command-title].js` in the "commands" folder. Ex: `hello-world.js`
> This file must `export default` a generator function based on the [API](#API)
  ```js
    import captain from 'captain';

    export default function*(){
      yield "Hello World!";
      let name = yield captain.text("What's your name?");
      yield `Hello ${name}`;
    }
  ```
- Call `[captain-alias] [command-title]` to run that generator function from anywhere, even other commands!

# Usage

### 1. Clone template

```sh
degit MarshallCB/captain-example
```

### 2. Rename "bin" to your liking

```sh
m4rsh --help # Displays help and list of options
sh4z compress  # Executes "compress" command
```

### 3. Write your first command

```sh
# Installs captain globally
npm install -g captain
```

### 3. Write your first command

```js
// hello-world.js

import captain from 'captain';
import otherFlow from './other';

export default function*(){
  yield "Hello World!";
  let result = yield captain.shell(`git init`);
  let ans = yield* otherFlow();
  let name = yield captain.text("What's your name?");
  yield `Hello ${name}`;
}

// other.js

import captain from 'captain';

export default function*(){
  let answer = yield captain.number(1,10)
  return answer;
}

// Hello world!
// [] Running `git init`
// > Git repository created in /cwd
// Pick a number between 1 and 10:
// What's your name?
// Hello Marshall
```

# API

### Possible Prompts: `yield captain[type](message, options, validation)`

| Type | Options |
| --- | --- |
| `captain.text` | { initial } |
| `captain.secret` | N/A |
| `captain.number` | { initial, min, max, float } |
| `captain.date` | { initial, locales, mask } |
| `captain.confirm` | { initial } |
| `captain.toggle` | { initial, active, inactive } |
| `captain.select` | { initial, multi, hint, choices: { title, description, value, disabled } }  |
| `captain.font` | { colors, size } |
| `captain.shell` | { dependencies } |
| `captain.progress` | { promise }  |


# Examples

Coming soon

## Details

<details>
  <summary><strong>About Generator Functions</strong></summary>
  <div>
    Coming soon
  </div>
</details>
<details>
  <summary><strong>Importance of Developer Experience</strong></summary>
  <div>
    Coming soon
  </div>
</details>

- - -

# About

### Contributing Guidelines

### Roadmap

Coming soon

## Acknowledgements
- Thanks to [@shinuza](https://github.com/shinuza) for the package name
- Generator section in [JavaScript Glossary on Demand](https://leanpub.com/jsglossary)

## License

MIT © [Marshall Brandt](https://m4r.sh)

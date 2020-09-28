<div align="center">
  <img src="https://github.com/marshallcb/captain/raw/master/captain.png" alt="Captain" width="100" />
</div>

<h1 align="center">captain</h1>
<div align="center">
  <a href="https://npmjs.org/package/captain">
    <img src="https://badgen.now.sh/npm/v/captain" alt="version" />
  </a>
</div>

<div align="center">Coordinate custom commands for ultimate developer productivity</div>
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

:card_file_box: Curate your own menu of command line workflows
:robot: Automate common tasks (project scaffolding, bulk ops, git flows)
:zap: Sync workflows across computers w/ GitHub
:globe_with_meridians: [Community workflows]()

## Use Cases
- GitHub workflows | [Examples]()
- Project scaffolding | [Examples]()
- Edit images | [Examples]()
- Linux installs | [Examples]()
- Guided tutorials | [Examples]()

# Setup

1. **Clone [this template]() to a directory you plan to keep**
```sh
degit MarshallCB/captain-example
```

2. **Write `[command-title].js` in the "commands" folder. Ex: `hello-world.js`**
> This file must `export default` a generator function based on the [API](#API)
  ```js
    import captain from 'captain';

    export default function*(){
      yield "Hello World!";
      let name = yield captain.text("What's your name?");
      yield `Hello ${name}`;
    }
  ```

3. **Name your captain to create a global CLI from this folder**
`package.json`
```json
  {
    "bin": {
      "m4rsh": "./cli.js" // Name this whatever you want!
    },
  }
```

4. Run `npm link` to install dependencies and register the CLI with your computer

5. Call `[captain-name] [command-title]`
Based on previous steps:
```sh
  m4rsh hello-world
  > "Hello World!"
  > "What's your name?"
  > Marshall
  > "Hello Marshall"
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

- - -

# About

### Techincal Details & Decisions

<details>
  <summary><strong>Generator Functions</strong></summary>
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
<details>
  <summary><strong>Security</strong></summary>
  <div>
    Coming soon
  </div>
</details>

### Contributing Guidelines

### Roadmap

Coming soon

## Acknowledgements
- Thanks to [@shinuza](https://github.com/shinuza) for the package name
- Generator section in [JavaScript Glossary on Demand](https://leanpub.com/jsglossary)

## License

MIT © [Marshall Brandt](https://m4r.sh)

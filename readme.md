<div align="center">
  <img src="https://github.com/marshallcb/captain/raw/master/captain.png" alt="Captain" width="100" />
</div>

<h1 align="center">Captain</h1>
<div align="center">
  <a href="https://npmjs.org/package/captain">
    <img src="https://badgen.now.sh/npm/v/captain" alt="version" />
  </a>
</div>

<div align="center">Coordinate dynamic CLI commands to make development a breeze</div>

## Features

Coming soon

# Usage

## Installation

Guided tutorial on path.cafe (coming soon)

```sh
npm install captain
```

## API

### Usage

```js
function* rate(){
  let answer = yield ["collect/number", {
    message: "How would you rate this, from 1 to 10?",
    min: 1,
    max: 10,
    initial: 5
  }]
}
```

| Type | Props |
| --- | --- |
| `collect/text` | message, initial, validate |
| `collect/secret` | message, validate |
| `collect/number` | message, initial, min, max, float, validate |
| `collect/date` | message, initial, locales, mask |
| `collect/confirm` | message, initial |
| `collect/toggle` | message, initial, active, inactive |
| `collect/select` | message, initial, multi, hint, choices ({ title, description, value, disabled })  |
| `font/[font_name]` | message, color |
| `md` | message |
| `progress` | message, async_fn |
| `<URL>` | (props will be converted to GET variables in the request URL) |


## Examples

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

# Development

### Contributing Guidelines

### Commands

Guided process to commit changes and/or submit a pull request
```sh
npm run save
```

### Roadmap

Coming soon

## Acknowledgements
- Thanks to [@shinuza](https://github.com/shinuza) for the package name
- Generator section in [JavaScript Glossary on Demand](https://leanpub.com/jsglossary)

## License

MIT © [Marshall Brandt](https://m4r.sh)

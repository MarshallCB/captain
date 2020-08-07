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

### Example

1. Write workflow

#### `rate.js`:
```js
export default function* rate(){
  let rating = yield ["collect/number", {
    message: "How would you rate this, from 1 to 10?",
    min: 1,
    max: 10,
    initial: 5
  }]
  let reason = yield ["collect/text", {
    message: `Why did you rate this a ${rating}?`
  }]
  return { rating, reason };
}
```

2. Call workflow using `captain`

```zsh
  captain ./rate.js
```

### Possible Prompts: `yield [type, props]`

| Type | Props |
| --- | --- |
| `collect/text` | { message, initial, validate } |
| `collect/secret` | { message, validate } |
| `collect/number` | { message, initial, min, max, float, validate } |
| `collect/date` | { message, initial, locales, mask } |
| `collect/confirm` | { message, initial } |
| `collect/toggle` | { message, initial, active, inactive } |
| `collect/select` | { message, initial, multi, hint, choices ({ title, description, value, disabled }) }  |
| `font/[font_name]` | { message, colors } |
| `md` | _markdown_ |
| `progress` | { message, promise }  |


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

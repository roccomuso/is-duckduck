# is-duckduck

[![NPM Version](https://img.shields.io/npm/v/is-duckduck.svg)](https://www.npmjs.com/package/is-duckduck)
[![Build Status](https://travis-ci.org/roccomuso/is-duckduck.svg?branch=master)](https://travis-ci.org/roccomuso/is-duckduck)
![node](https://img.shields.io/node/v/is-duckduck.svg)
[![Dependency Status](https://david-dm.org/roccomuso/is-duckduck.png)](https://david-dm.org/roccomuso/is-duckduck)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Verify that a request is from DuckDuckBot, the Web crawler for DuckDuckGo

This library implements DuckDuckGo's own verification steps [outlined here](https://help.duckduckgo.com/duckduckgo-help-pages/results/duckduckbot/).

## Install

`npm install --save is-duckduck`

## Example

```javascript
const isDuckDuck = require('is-duckduck')

let ip = '72.94.249.34'
isDuckDuck(ip).then((outcome) => {
  if (outcome) {
    // it's duckduck.
  }
}).catch(console.error)
```

### Example with express

```javascript
app.enable('trust proxy')

app.use((req, res, next) => {
  let ip = req.ip || req.connection.remoteAddress
  isDuckDuck(ip).then(outcome => {
    if (outcome) {
      res.status(404).text('Nothing to scan') // block duckduck crawler
    } else {
      next() // it's a user
    }
  })
})
```

## Tests

`npm test`

## License

MIT

## Author

Rocco Musolino [@roccomuso](https://twitter.com/roccomuso)

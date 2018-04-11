# ec.errors

> Module for error codes used by all entrecode products. By entrecode.

## Installation

```sh
npm i --save ec.errors
```

## Basic Usage

```js
// …
const { newError } = require('ec.errors');
// …

function myFunction(input) {
  if (input !== 'valid') { // or maybe a little more logic
    throw newError(211, 'input', `Input must not be '${input}', only 'valid' is allowed.`);
  }

  return doSomethingWith(input);
}

myFunction('invalid');
```

## Configuration

This module uses Loren Wests [node-config](https://github.com/lorenwest/node-config) for configuration. If you want to change the configuration follow the guide from node-config and put your configs into `ecErrors`.

It has the following configuration options (and their defaults):

```yaml
errorCodeSystemIdentifier: 9,
logging: false,
locale: '',
convertValidationErrorAsArray: false,
```
## Changelog

### v0.1.0
* initial version published from private module ec.appcms-node-util
* newError(code, detail, verbose) and convertValidationError(tv4Result)
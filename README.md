# ec.errors

> Module for error codes used by all entrecode products. By entrecode.

## Installation

```sh
npm i --save ec.errors
```

## Basic Usage

```js
// …
const { newError } = require('ec.errors')(myConfig);
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

This module has the following configuration options (and their defaults). In order to overwrite with your own config pass an object to the require call.

```yaml
errorCodeSystemIdentifier: 9,
logging: false,
locale: '',
convertValidationErrorAsArray: false,
```

## Changelog

### v0.2.0
* removed `node-config`
* switched to module factory style module to support frontend transpilation

#### v0.1.3

* fix: load errorCodes with file extension, should fix webpack build

#### v0.1.2

* feat: adds typings

#### v0.1.1

* fix: fixed error array conversion in mapTV4Error

### v0.1.0

* initial version published from private module ec.appcms-node-util
* feat: newError(code, detail, verbose) for error creation
* feat: convertValidationError(tv4Result) for mapping tv4 validation errors into entrecode style errors

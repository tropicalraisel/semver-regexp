<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/tropicalraisel/semver-regexp/master/.github/images/logo.png" width="300">
  <h1>semver-regexp</h1>
  <p>Semantic Version 2.0.0 library powered by Regex.</p>
  <hr>
  <a href="https://regex101.com/r/QcBp0R/1"><code>regex101 ex.</code></a>
  <hr>
  <p>
    <a href="https://www.npmjs.com/package/@tropicalraisel/semver-regexp">
      <img alt="NPM Badge" src="https://img.shields.io/npm/v/@tropicalraisel/semver-regexp?style=flat&logo=npm&label=npm&color=CB3837">
    </a>
    <a href="https://github.com/google/gts">
      <img alt="Google Badge" src="https://img.shields.io/static/v1?style=flat&logo=google&label=google&message=code%20style&color=4285F4">
    </a>
    <a href="https://npm.runkit.com/@tropicalraisel/semver-regexp">
      <img alt="RunKit Badge" src="https://img.shields.io/static/v1?style=flat&logo=runkit&label=runkit&message=demo&color=491757">
    </a>
  </p>
</div>

## Description

This package aims to fix issues with [semver](https://www.npmjs.com/package/semver) and [semver-regex](https://www.npmjs.com/package/semver-regex).
Primarily, neither pass [all tests provided on the semver website](https://regex101.com/r/vkijKf/1/).
Another small issue is that they allow [invalid semantic version strings](https://semver.org/#is-v123-a-semantic-version).

## Usage

There are two functions, one default function that permits semantic version strings starting with `~`, `^`, or `v`, and another which strictly matches a semantic version.

### ESM

```javascript
import valid, { isValidSemanticVersion } from '@tropicalraisel/semver-regexp'

const version = 'v4.2.0'

console.log(valid(version))
console.log(isValidSemanticVersion(version))
```

### CommonJS

```javascript
const semver = require('@tropicalraisel/semver-regexp')

const version = 'v4.2.0'

console.log(semver.default(version))
console.log(semver.isValidSemanticVersion(version))
```

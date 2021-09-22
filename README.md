<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/tropicalraisel/semver-regexp/master/.github/images/logo.png" width="300">
  <h1>semver-regexp</h1>
  <p>Semantic Version 2.0.0 library powered by Regex.</p>
  <hr>
  <a href="https://regex101.com/r/QcBp0R/1"><code>regex101 ex.</code></a>
  <hr>
  <p>
    <a href="https://www.npmjs.com/package/@tropicalraisel/semver-regexp">
      <img alt="NPM Version" src="https://img.shields.io/npm/v/@tropicalraisel/semver-regexp?logo=npm&label=npm&color=CB3837">
    </a>
    <a href="https://github.com/google/gts">
      <img alt="NPM Version" src="https://img.shields.io/badge/code%20style-google-blueviolet.svg">
    </a>
  </p>
</div>

## Description

This package aims to fix issues with [semver](https://www.npmjs.com/package/semver) and [semver-regex](https://www.npmjs.com/package/semver-regex).
Primarily, neither pass [all tests provided on the semver website](https://regex101.com/r/vkijKf/1/).
Another small issue is that they allow [invalid semantic version strings](https://semver.org/#is-v123-a-semantic-version).

There are two functions, one which strictly matches a semantic version, and another default function that permits version strings starting with `~`, `^`, or `v`.

## Usage

```javascript
import valid, { isValidSemanticVersion } from '@tropicalraisel/semver-regexp'

const version = 'v4.2.0'

console.log(valid(version))
console.log(isValidSemanticVersion(version))
```

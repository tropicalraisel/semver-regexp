# semver-regexp

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

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

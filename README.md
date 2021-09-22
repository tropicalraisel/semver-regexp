# semver-regexp

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

## Description

This package aims to fix issues with [semver](https://www.npmjs.com/package/semver) and [semver-regex](https://www.npmjs.com/package/semver-regex).
Primarily, neither pass [all tests provided on the semver website](https://regex101.com/r/vkijKf/1/).
Another small issue is that they allow [invalid semantic version strings](https://semver.org/#is-v123-a-semantic-version).

## Usage

```javascript
import isValidVersion from '@tropicalraisel/semver-regexp'

const version = '4.2.0'

console.log(isValidVersion(version))
```

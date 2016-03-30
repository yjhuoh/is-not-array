
# is-not-array

Helper function for older browsers.

[![build status](https://circleci.com/gh/yjhuoh/is-not-array.svg?style=shield&circle-token=ec767b8d72f9bb07760090d9d28db487c40da7ea)](https://circleci.com/gh/yjhuoh/is-not-array)
[![downloads](https://img.shields.io/npm/dm/is-not-array.svg)](https://www.npmjs.org/package/is-not-array)

## Usage

```js
var isNotArray = require('is-not-array');

console.log(isNotArray({})); // => true
console.log(isNotArray([])); // => false
```

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install is-not-array
```

Then bundle for the browser with
[browserify](https://github.com/substack/browserify).

## License

(MIT)

Copyright (c) 2016 Yu-Jay Huoh

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

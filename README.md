# long-math-js
arithmetic operation for long numbers

## Introduction

In JavaScript, you can only store up to 53 bits as a number. Which means maximum number you can store in a safe integer format is 9007199254740991. (see Number.MAX_SAFE_INTEGER).

This is a problem if we want to do operations with extremely large numbers. For example,
66666666631813123131232132131231231233231 + 1832347623468324374387487417348371

## Installation
Using npm
```
npm install -s long-math-js
```

Using yarn
```
yarn add long-math-js
```

## Usage
const { math }  = require('long-math-js');

math
  .addLong(x, y)

Where x and y is a number string

## Functions

Type         |
-------------|-----------------------
arithmetic   | addLong()

# easyCache (with the uppercase `C`)

[![Greenkeeper badge](https://badges.greenkeeper.io/yeliex/easyCache.svg)](https://greenkeeper.io/)
a  lightweight cache library

## Installation
```
$ npm install easyCache --save
```

## Usage

```js
import { read, write } from 'easyCache'; 
write('key', 'value'); // value
read('key'); // value
```

## Api
- `read(keys: string/array)`
  - get value from cache with key(s)
  - `keys` can be a string with `.` or an array
  - if `keys` is `undefined`, return the whole cache (not recommend)
  - nested support
- `write(keys: string/array, value: any)`
  - write value to cache with key(s)
  - `keys` can be a string with `.` or an array
  - but cannot be `undefined`
  - nested support
- `set`
  - alias of `write`
- `clear(key: string)`
  - remove the **first class** value with key
  - if `keys` is `undefined`, remove `everything`
  - do not support nested cahce remove(welcome pr) 
  
## About PR
we really need another name as you see, so welcome for advices

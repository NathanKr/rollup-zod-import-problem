"use strict";
exports.__esModule = true;
var zod_1 = require("zod");
console.log('index.js is starting ...');
var userSchema = zod_1["default"].object({ name: zod_1["default"].string(), age: zod_1["default"].number() });
var res = userSchema.safeParse({ name: "John Doe", age: 23 });
console.log(res);

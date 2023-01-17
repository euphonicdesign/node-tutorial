// npm --version
// npm i <package name>
// npm install -g <packageName>
// npm init
// npm init -y

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello people!");
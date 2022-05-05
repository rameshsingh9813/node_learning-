const _=require('lodash')
const g=[1,[2,[3,4,[5]]]];
const newText=_.flattenDeep(g)
console.log(newText)
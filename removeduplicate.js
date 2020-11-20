// this is super effechint way to remove duplicate
var duplicatedarray= ['hallo','hallo'];
var nondoblicatearray=[...new Set(duplicatedarray)];
console.log(nondoblicatearray);
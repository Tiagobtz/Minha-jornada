// Herança prototype
Object.prototype.atributo4 = 'x' // Todo objeto por padrão é herdeiro do prototype Object

let animal = {atributo1: 'a'}
let vertebrado = {__proto__:animal, atributo2: 'b'}
let ave = {__proto__: vertebrado, atributo3: 'c'}

console.log(ave.atributo3, ave.atributo2, ave.atributo1, ave.atributo4)
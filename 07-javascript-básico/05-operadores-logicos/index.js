/* 
    == ----- igual ----- a == b ----- verdadeiro se a for igual a b
    === ---- idêntico ----- a === b ----- verdadeiro se a for idêntico a b
    != ----- diferente ----- a != b ----- verdadeiro se a for diferente de b
    !== ----- não idêntico ----- a !== b ----- verdadeiro se a não for idêntico a b
    < ----- menor que ----- a < b ----- verdadeiro se a for menor que b
    <= ----- menor ou igual que ----- a <= b ----- verdadeiro se a for menor ou igual que b
    > ----- maior que ----- a > b ----- verdadeiro se a for maior que b
    >= ----- maior ou igual que ----- a >= ----- verdadeiro se a for maior ou igual que b
*/

const a = 2
const b = 2

// AND

console.log(a === b && a <= b)
// V e V = V
console.log(a === b && a < b)
// V e F = F
console.log(a > b && a === b)
// F e V = F
console.log(a > b && a < b)
// F e F = F

// OR

console.log(a === b || a <= b)
// V ou V = V
console.log(a === b || a < b)
// V ou F = V
console.log(a > b || a === b)
// F ou V = V
console.log(a > b || a < b)
// F ou F = F

// NOT

console.log(!(a === b))
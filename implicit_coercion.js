// 문자열 타입
console.log(+'');             // 0
console.log(+'0');            // 0
console.log(+'1');          // 1
console.log(+'string');       // NaN
// 불리언 타입
console.log(+true);           // 1
console.log(+false);          // 0
// null 타입
console.log(+null);           // 0
// undefined 타입
console.log(+undefined);      // NaN
// 심볼 타입
// console.log(+Symbol());       // TypeError: Cannot convert a Symbol value to a number
// 객체 타입
console.log(+{});             // NaN
console.log(+[]);             // 0
console.log(+[10, 20]);       // NaN
console.log(+(function(){})); // NaN

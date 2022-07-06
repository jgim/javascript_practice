// // 숫자 리터럴
// 10.50
// 1001

// // 문자열 리터럴
// 'Hello'
// "World"

// // 불리언 리터럴
// true
// false

// // null 리터럴
// null

// // undefined 리터럴
// undefined

// // 객체 리터럴
// { name: 'Lee', gender: 'male' }

// // 배열 리터럴
// [ 1, 2, 3 ]

// // 정규표현식 리터럴
// /ab+c/

// // 함수 리터럴
// function() {}

console.log(ka);

var foo = 1 + '10'
var bar = 1 * '10'

console.log(foo);
console.log(bar);

var integer = 10;        // 정수
var double = 10.12;      // 실수
var negative = -20;      // 음의 정수
var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;       //16진수

console.log(integer);
console.log(double);
console.log(negative);
console.log(binary);
console.log(octal);
console.log(hex);

console.log(0b01000001 === 0o101);

var pInf = 10 / 0;
var nInf = -10 / 0;
var nZero = -0;
var pZero = 0;
var nNaN = NaN;
var pNaN = +NaN;

console.log(pInf);
console.log(nInf);
console.log(nZero);
console.log(pZero);
console.log(nNaN);
console.log(pNaN);

var str = 'hello';
str = 'world';

console.log(str);

var str = 'string';
// 문자열은 유사배열이다.
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// 문자열을 변경할 수 없다.
str[0] = 'S';
console.log(str); // string

var foo = 'hello';
foo = null;
console.log(foo);
foo = 'world';
console.log(foo);

console.log(typeof null);

var key = Symbol('key');
console.log(key);

var obj = {};
obj[key] = 'value';
console.log(obj[key]);



var ka = 'hello';

// var foo = var x = 5 * 10;
var foo = x = 100;
console.log(foo);

// 산술 연산자
console.log(5 * 4); // 20

// 문자열 연결 연산자
console.log('My name is ' + 'Lee'); // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

console.log(color);

// 비교 연산자
console.log(3 > 5); // false

// 논리 연산자
console.log((5 > 3) && (2 < 4));  // true

// 타입 연산자
console.log(typeof 'Hi'); // "string"

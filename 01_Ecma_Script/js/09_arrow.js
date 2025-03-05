// 함수 선언식
function sum(a, b) {return a + b;}
console.log(sum(1,2));

// 함수 표현식
let sum2 = function (a, b) {
  return a + b;
};
console.log(sum2(1,2));

// 화살표 함수
let sum3 = (a, b) => {return a + b};
// let sum = (a, b) => a + b;
console.log(sum3(1,2));
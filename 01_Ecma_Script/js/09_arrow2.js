// 함수 선언식
function sum(a, b) {
  let res = a + b;
  return res;
}
console.log(sum(1, 2));

// 함수 표현식
let sum2 = function (a, b) {
    let res = a + b;
    return res;
};
console.log(sum2(1, 2));

// 화살표 함수
let sum3 = (a, b) => {
    let res = a + b;
    return res;
};
console.log(sum3(1, 2));

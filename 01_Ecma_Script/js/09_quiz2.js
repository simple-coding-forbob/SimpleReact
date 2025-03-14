// 함수 선언식
function minus(a, b) {
  let res = a - b;
  return res;
}
console.log(minus(2, 1));

// 함수 표현식
let minus2 = function (a, b) {
  let res = a - b;
  return res;
};
console.log(minus2(2, 1));

// 화살표 함수
let minus3 = (a, b) => {
  let res = a - b;
  return res;
};
console.log(minus3(2, 1));

let dog = null;
// console.log(`이름은 ${dog.name}`); // null 에러발생
console.log(`이름은 ${dog?.name}`);   // 에러 발생 없음, undefined 로 변경됨
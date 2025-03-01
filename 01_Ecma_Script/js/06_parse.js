let data = [
  {
    name: "데미안",
    price: 18000,
  },
  {
    name: "노인과바다",
    price: 26000,
  },
];
let text = JSON.stringify(data);
console.log(text);

let obj = JSON.parse(text);
console.log(obj);

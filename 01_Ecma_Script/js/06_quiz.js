let data = [
  {
    name: "파헬벨 캐논",
    price: 10000,
  },
  {
    name: "베토벤 바이러스",
    price: 20000,
  },
];
let text = JSON.stringify(data);
console.log(text);

let obj = JSON.parse(text);
console.log(obj);

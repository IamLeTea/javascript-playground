let result;
const array = [1, 2, 3, 4, 5];

array.forEach((item, index) => {
  console.log(item);
});

result = array.map((item, index) => {
  return item;
});
console.log(result);

result = array.filter((item, index) => {
  return item % 2 === 0;
});
console.log(result);

result = array.reduce((accumulator, item, index) => {
  return accumulator + item;
}, 0);
console.log(result);

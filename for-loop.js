let result;
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let item in array) {
  console.log(item);
}

for (let item of array) {
  console.log(item);
}

const array = ["a", "b", "c", "d", "e"];

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

for (let item in array) {
  console.log(item);
}

for (let item of array) {
  console.log(item);
}

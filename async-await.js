// NOTE: Async - Basic
const getData = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (value) {
        resolve([value, null]);
      } else {
        resolve([null, value]);
      }
    }, 3000);
  });
};

const [result, error] = await getData(1000);
console.log(result, error);

const [result2, error2] = await getData("");
console.log(result, error);

// NOTE: Async - Timeout
const setAsyncTimeout = (method, timer = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (method) {
        resolve(method());
      } else {
        reject("There is no callback");
      }
    }, timer);
  });
};

const result3 = await setAsyncTimeout(() => {
  return 3000;
}, 1000);
console.log(result3);

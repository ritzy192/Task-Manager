const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) return reject("Error");
      resolve(a + b);
    }, 50);
  });
};

const dowork = async () => {
  const sum1 = await add(1, 1);
  const sum2 = await add(sum1, 4);
  const sum3 = await add(sum2, 4);
  return sum3;
};

dowork()
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

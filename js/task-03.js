async function bulkRun(funcAndArgsArray) {
  const results = [];

  for (const [func, args] of funcAndArgsArray) {
    const result = await new Promise(resolve => {
      const callback = data => {
        resolve(data);
      };

      // Вызываем функцию с переданными аргументами и колбэком
      func(...args, callback);
    });

    results.push(result);
  }

  return results;
}

const f1 = cb => {
  cb(1);
};

const f2 = (a, cb) => {
  cb(a);
};

const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
// Output: [1, 2, [3, 4]]

function arrayToObject(arr) {
  const obj = {};

  function recursiveArrayToObject(currentArr, currentObj) {
    for (const [key, value] of currentArr) {
      if (Array.isArray(value)) {
        currentObj[key] = {};
        recursiveArrayToObject(value, currentObj[key]);
      } else {
        currentObj[key] = value;
      }
    }
  }

  recursiveArrayToObject(arr, obj);
  return obj;
}

var arr = [
  ['name', 'developer'],
  ['age', 5],
  [
    'skills',
    [
      ['html', 4],
      ['css', 5],
      ['js', 5],
    ],
  ],
];

const result = arrayToObject(arr);
console.log(result);

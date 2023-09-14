function mapObject(obj, parentKey = '') {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}/${key}` : key;

      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        // Если значение является объектом, вызываем функцию рекурсивно
        const nestedMapping = mapObject(obj[key], newKey);
        Object.assign(result, nestedMapping);
      } else {
        // Если значение не является объектом, добавляем его в результат
        result[newKey] = obj[key];
      }
    }
  }

  return result;
}

const obj = {
  a: {
    b: {
      c: 12,
      d: 'Hello World',
    },
    e: [1, 2, 3],
  },
};

const flatMap = mapObject(obj);
console.log(flatMap);
// Output: {
//   'a/b/c': 12,
//   'a/b/d': 'Hello World',
//   'a/e': [1, 2, 3]
// }

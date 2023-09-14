function objectToArray(obj) {
  const arr = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value === 'object' && !Array.isArray(value)) {
        arr.push([key, objectToArray(value)]);
      } else {
        arr.push([key, value]);
      }
    }
  }

  return arr;
}

const obj = {
  name: 'developer',
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
};

const result = objectToArray(obj);
console.log(result);

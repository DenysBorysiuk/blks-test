function chunkArray(arr, chunkSize) {
  let index = 0;

  return {
    next: function () {
      const chunk = arr.slice(index, index + chunkSize);
      index += chunkSize;

      return {
        value: chunk.length > 0 ? chunk : undefined,
        done: index >= arr.length,
      };
    },
  };
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log(iterator.next()); // { value: [1, 2, 3], done: false }
console.log(iterator.next()); // { value: [4, 5, 6], done: false }
console.log(iterator.next()); // { value: [7, 8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }

function add(value) {
  let sum = value;

  function innerAdd(nextValue) {
    sum += nextValue;
    return innerAdd;
  }

  innerAdd.valueOf = function () {
    return sum;
  };

  return innerAdd;
}

console.log(Number(add(1)(2))); // == 3
console.log(Number(add(1)(2)(5))); // == 8
console.log(Number(add(1)(2)(-3)(4))); // == 4
console.log(Number(add(1)(2)(3)(4)(-5))); // == 5

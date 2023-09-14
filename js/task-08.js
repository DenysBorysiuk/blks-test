function combos(num) {
  const result = [];

  function generateCombos(currentCombo, remainingNum) {
    if (remainingNum === 0) {
      result.push(currentCombo);
      return;
    }

    if (currentCombo.length === 0) {
      // Если текущая комбинация пуста, начнем с 1
      for (let i = 1; i <= remainingNum; i++) {
        generateCombos([i], remainingNum - i);
      }
    } else {
      // В противном случае, продолжим добавлять числа
      const lastNumber = currentCombo[currentCombo.length - 1];
      for (let i = lastNumber; i <= remainingNum; i++) {
        const newCombo = [...currentCombo, i];
        generateCombos(newCombo, remainingNum - i);
      }
    }
  }

  generateCombos([], num);
  return result;
}

console.log(combos(3));
console.log(combos(10));

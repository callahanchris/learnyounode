var numbers = process.argv,
    sum = 0,
    i;

for (i = 2; i < numbers.length; i++) {
  sum += Number(numbers[i]);
}

console.log(sum);
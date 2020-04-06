var num = prompt("Enter number");
num = parseInt(num, 10);
var isPrime = true;

for (var i = 1; i <= num / 2; i++) {
  if (i % num === 0) {
    isPrime = false;
    break;
  }
}

console.log(`${num} is ${isPrime ? "" : "not "}prime`);

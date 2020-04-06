var num = prompt("Enter number");
num = parseInt(num, 10);
var isPrime = true;

for (var i = 2; i <= num / 2; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(`${num} is ${isPrime ? "" : "not "}prime`);

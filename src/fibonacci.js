function fibonacci(n) {
  var a = 1,
    b = 1,
    c;
  console.log(a);
  console.log(b);
  for (var i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
}
console.log(fibonacci(5));

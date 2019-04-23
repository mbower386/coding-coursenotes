// #1:
function sigma(num) {
  var sum = 1;

  for (var i = 2; i <= num; i++) {
    sum += i;
  }

  return sum;
}

// #2:
function factorial(num) {
  var sum = 1;

  for (var i = 2; i <= num; i++) {
    sum *= i;
  }

  return sum;
}

// #3:
function fibonacci(num) {
  var fib_arr = [];

  if (num === 1) {
    fib_arr.push(0);
  }
  else if (num === 2) {
    fib_arr.push(0);
    fib_arr.push(1);
  }
  else if (num > 2) {
    fib_arr.push(0);
    fib_arr.push(1);

    for (var i = 2; i <= num; i++) {
      fib_arr.push(fib_arr[i - 1] + fib_arr[i - 2]);
    }
  }

  return fib_arr[num];
}

// #4:
function second_to_last(arr) {
  if (arr.length >= 2) {
    return arr[arr.length - 2];
  }
  else {
    return null;
  }
}

// #5:
function n_to_last (arr, n) {
  if (arr.length >= n) {
    return arr[arr.length - n];
  }
  else {
    return null;
  }
}

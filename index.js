function receivesAFunction(fn) {
  fn();
}

function returnsANamedFunction() {
  return function named() {};
}

function returnsAnAnonymousFunction() {
  return () => {};
}

function sequence(x) {
  return Array.from({ length: x + 1 }, (_, i) => i + 1).sort();
}
console.log(sequence(15));

import sum from "./sum";

export default function product(iterator, closure = (a, b) => a * b) {
  return sum(iterator, closure);
}

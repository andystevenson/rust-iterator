import eq from "./eq";

export default function ne(iterable, other, compare = (a, b) => a === b) {
  return !eq(iterable, other, compare);
}

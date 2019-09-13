import iter from "./iter";

export default function sum(iterator, closure = (a, b) => a + b) {

  let i = iter(iterator);
  let current = i.next();
  if (current.done) return undefined;

  let result = current.value;
  current = i.next();
  while (!current.done) {
    result = closure(result, current.value);
    current = i.next();
  }
  return result;
}

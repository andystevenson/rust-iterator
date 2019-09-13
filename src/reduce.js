import iter from "./iter";

export default function reduce(iterator, closure, initialValue) {
  let result = initialValue;
  let index = -1;
  let i = iter(iterator);
  if (result == null) {
    // use the first element as the initialValue
    const first = i.next();
    if (first.done) return result; // iterator is empty
    index++;
  }

  let current = i.next();
  while (current.done === false) {
    index++;
    result = closure(result, current.value, index, iterator);
    current = i.next();
  }
  return result;
}

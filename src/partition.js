import iter from "./iter";

export default function partition(iterator, predicate) {
  const truthy = [];
  const falsey = [];
  const i = iter(iterator);
  let current = i.next();
  while (!current.done) {
    const value = current.value;
    if (predicate(value)) truthy.push(value);
    else falsey.push(value);
    current = i.next();
  }
  return iter([truthy, falsey]);
}

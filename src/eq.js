import iter from "./iter";

export default function eq(iterable, other, compare = (a, b) => a === b) {
  const i = iter(iterable);
  const o = iter(other);

  let result = true; // start out equal
  while (result) {
    const ci = i.next();
    const co = o.next();
    if (ci.done !== co.done) return false;
    if (ci.done || co.done) return result;
    result = compare(ci.value, co.value);
  }

  return result;
}

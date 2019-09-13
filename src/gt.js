import iter from "./iter";

export default function gt(iterable, other, compare = (a, b) => a > b) {
  const i = iter(iterable);
  const o = iter(other);

  let result = false;
  while (!result) {
    const ci = i.next();
    const co = o.next();
    if (!ci.done && co.done) return true;
    if (ci.done || co.done) return false;
    result = compare(ci.value, co.value);
  }

  return result;
}

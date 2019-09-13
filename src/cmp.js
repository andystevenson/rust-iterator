import { defaultCmp } from "./utilities";
import iter from "./iter";

export default function cmp(iterable, other, compare = defaultCmp) {
  const i = iter(iterable);
  const o = iter(other);

  // step through each iterator in sequence and compare
  let result = 0; // start out equal
  while (result === 0) {
    const ci = i.next();
    const co = o.next();
    if (ci.done !== co.done) {
      if (ci.done) return -1;
      return 1;
    }
    if (ci.done || co.done) return result;
    result = compare(ci.value, co.value);
  }

  return result;
}

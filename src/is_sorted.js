import iter from "./iter";
import done from "./done";

export default function is_sorted(iterable, compare = (a, b) => a <= b) {
  const i = iter(iterable);

  let a = i.next();
  if (done(a)) return true;

  let result = true;
  let prev = a.value;
  while (result) {
    const b = i.next();
    if (done(b)) return result;
    const curr = b.value;
    result = compare(prev, curr);
    prev = curr;
  }

  return result;
}

export const isSorted = is_sorted;

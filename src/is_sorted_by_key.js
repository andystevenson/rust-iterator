import iter from "./iter";
import done from "./done";

export default function is_sorted_by_key(
  iterable,
  key = v => v,
  compare = (a, b) => a <= b
) {
  const i = iter(iterable);

  let a = i.next();
  if (done(a)) return true;

  let result = true;
  let prev = key(a.value);
  while (result) {
    const b = i.next();
    if (done(b)) return result;
    const curr = key(b.value);
    result = compare(prev, curr);
    prev = curr;
  }

  return result;
}

export const isSortedByKey = is_sorted_by_key;

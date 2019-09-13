import iter from "./iter";
import more from "./more";

export default function last(iterable) {
  const i = iter(iterable);
  let c = i.next();
  let result = undefined;
  while (more(c)) {
    result = c.value;
    c = i.next();
  }

  return result;
}

import iter from "./iter";
import more from "./more";

export default function nth(iterator, n = 0) {
  let index = -1;
  let i = iter(iterator);
  let c = i.next();
  while (more(c)) {
    index++;
    if (index === n) return c.value;
    c = i.next();
  }
  return undefined;
}

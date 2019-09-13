import iter from "./iter";
import more from "./more";

export default function position(iterator, predicate) {
  let i = iter(iterator);
  let c = i.next();
  let index = 0;
  while (more(c)) {
    if (predicate(c.value)) return index;
    c = i.next();
    index++;
  }
  return -1;
}

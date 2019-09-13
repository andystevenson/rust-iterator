import iter from "./iter";
import None from "./None";
import more from "./more";

export default function find(iterator, predicate) {
  let i = iter(iterator);
  let c = i.next();
  while (more(c)) {
    if (predicate(c.value)) return c;
    c = i.next();
  }
  return None;
}

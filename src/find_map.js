import iter from "./iter";
import more from "./more";
import None from "./None";

export default function find_map(iterator, closure) {
  let i = iter(iterator);
  let c = i.next();
  while (more(c)) {
    let result = closure(c.value);
    if (result !== undefined) return c;
    c = i.next();
  }
  return None;
}

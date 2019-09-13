import iter from "./iter";
import more from "./more";

export default function any(iterator, predicate = () => false) {
  let i = iter(iterator);
  let c = i.next();
  while (more(c)) {
    if (predicate(c.value)) return true;
    c = i.next();
  }
  return false;
}

import iter from "./iter";
import more from "./more";

export default function rposition(iterator, predicate) {
  let i = iter(iterator);
  let index = i.length;
  let c = i.next_back();

  while (more(c)) {
    index--;
    if (predicate(c.value)) return index;
    c = i.next_back();
  }
  return -1;
}

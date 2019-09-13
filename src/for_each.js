import iter from "./iter";
import more from "./more";

export default function for_each(iterator, closure) {
  let i = iter(iterator);
  let c = i.next();
  while (more(c)) {
    closure(c.value);
    c = i.next();
  }
}

export const forEach = for_each;

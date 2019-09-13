import iter from "./iter";
import more from "./more";

export default function count(iterator) {
  let result = 0;
  let i = iter(iterator);
  let c = i.next();
  while (more(c)) result++, (c = i.next());
  return result;
}

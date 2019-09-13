import into from "./into";
import more from "./more";

export default function all(iterable, predicate = () => true) {
  let result = true;
  let iter = into(iterable);
  let c = iter.next();
  while (more(c) && (result = predicate(c.value))) c = iter.next();

  return result;
}

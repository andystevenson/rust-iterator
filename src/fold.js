import iter from "./iter";
import more from "./more";

export default function fold(iterator, initialValue, closure) {
  let result = initialValue;
  let i = iter(iterator);
  let c = i.next();
  while (more(c)) {
    result = closure(result, c.value);
    c = i.next();
  }
  return result;
}

import iter from "./iter";
import done from "./done";
import more from "./more";
import None from "./None";

export default function by_key(iterator, closure, choose = (a, b) => b) {
  let i = iter(iterator);
  let c = i.next();
  if (done(c)) return None;

  let value = c.value;
  let a = closure(value);
  let element = c;
  c = i.next();
  while (more(c)) {
    value = c.value;
    const b = closure(value);
    const ch = choose(a, b);
    if (ch === b || (ch === a && ch === b)) {
      // point to the latest
      element = c;
    }
    a = ch;
    c = i.next();
  }
  return element;
}

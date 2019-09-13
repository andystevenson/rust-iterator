import iter from "./iter";
import more from "./more";
import done from "./done";

export default function collect(iterator, closure = v => v) {
  try {
    let i = iter(iterator);
    let c = i.next();
    if (done(c)) return [];

    const result = [];
    const types = new Set();
    let length = 0;
    const string = "string";
    let has = false;
    while (more(c)) {
      const value = closure(c.value);
      const type = typeof value;
      types.add(type);
      has = type === string;
      if (has) length = Math.max(length, value.length);
      result.push(value);
      c = i.next();
    }

    const doString = length < 2 && has && types.size === 1;
    if (doString) return result.join("");
    return result;
  } catch (e) {
    if (e instanceof Error) return e;
    return new Error(e);
  }
}

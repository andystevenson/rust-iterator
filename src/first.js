import iter from "./iter";
import done from "./done";

export default function first(iterable) {
  const f = iter(iterable).next();
  return done(f) ? undefined : f.value;
}

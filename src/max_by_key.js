import by_key from "./by_key";
import identity from "./utilities";

export default function max_by_key(
  iterator,
  closure = identity,
  max = Math.max
) {
  return by_key(iterator, closure, max);
}

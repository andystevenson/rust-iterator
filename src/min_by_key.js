import by_key from "./by_key";
import { identity } from "./utilities";

export default function min_by_key(
  iterator,
  closure = identity,
  min = Math.min
) {
  return by_key(iterator, closure, min);
}

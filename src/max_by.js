import by_key from "./by_key";

export default function max_by(iterator, closure = Math.max) {
  return by_key(iterator, e => e, closure);
}

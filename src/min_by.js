import by_key from "./by_key";

export default function min_by(iterator, closure = Math.min) {
  return by_key(iterator, e => e, closure);
}

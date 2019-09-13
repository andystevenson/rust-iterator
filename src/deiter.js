import DoubleEnded from "./DoubleEnded";

export default function deiter(iterable) {
  return new DoubleEnded(iterable);
}

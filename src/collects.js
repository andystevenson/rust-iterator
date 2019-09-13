import iter from "./iter";
import collect from "./collect";

export default function collects(iterator, closure = v => v) {
  return iter(collect(iterator, closure));
}

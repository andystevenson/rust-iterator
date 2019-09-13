import iter from "./iter";
import rcollect from "./rcollect";

export default function rcollects(iterator, closure = v => v) {
  return iter(rcollect(iterator, closure));
}

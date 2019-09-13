import for_each from "./for_each";
import Try from "./Try";

export default function try_for_each(iterator, closure) {
  try {
    return new Try(for_each(iterator, closure));
  } catch (e) {
    if (e instanceof Error) return new Try(e);
    return new Try(Error(e));
  }
}

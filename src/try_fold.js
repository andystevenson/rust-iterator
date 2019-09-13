import fold from "./fold";
import Try from "./Try";

export default function try_fold(iterator, initialValue, closure) {
  try {
    return new Try(fold(iterator, initialValue, closure));
  } catch (e) {
    if (e instanceof Error) return new Try(e);
    return new Try(Error(e));
  }
}

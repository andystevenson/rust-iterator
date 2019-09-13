import is_sorted from "./is_sorted";

export default function is_sorted_by(iterator, closure = (a, b) => a <= b) {
  return is_sorted(iterator, closure);
}

export const isSortedBy = is_sorted_by;

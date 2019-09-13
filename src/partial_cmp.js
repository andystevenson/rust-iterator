import cmp, { defaultCmp } from "./cmp";

export default function partial_cmp(iterator, other, compare = defaultCmp) {
  return cmp(iterator, other, compare);
}

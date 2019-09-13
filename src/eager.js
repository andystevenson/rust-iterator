// eager implementations of lazy iterators
import * as R from "methods";

export function chain(iterator, other, ...rest) {
  return R.chain(iterator, other, ...rest).collect();
}

export function cloned(iterator, using = R.Some) {
  return R.cloned(iterator, using).collect();
}

export function copied(iterator, using = R.identity) {
  return R.copied(iterator, using).collect();
}

export function enumerate(iterator) {
  return R.enumerate(iterator).collect();
}

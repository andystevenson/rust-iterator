import * as R from "./methods";
export const None = R.None;
export const Some = R.Some;
export const done = R.done;
export const more = R.more;

export default class Iterator {
  [Symbol.iterator]() {
    return this;
  }

  all(predicate = R.istrue) {
    // boolean
    return R.all(this, predicate);
  }

  any(predicate = R.isfalse) {
    // boolean
    return R.any(this, predicate);
  }

  back() {
    return this.nextBack();
  }

  by_key(closure = R.identity, choose = (a, b) => b) {
    // value
    return R.by_key(this, closure, choose);
  }

  byKey(closure = R.identity, choose = (a, b) => b) {
    return R.by_key(this, closure, choose);
  }

  by_ref() {
    // iterator
    return R.by_ref(this);
  }

  byRef() {
    return R.by_ref(this);
  }

  cloned(using = R.Some) {
    // iterator
    return R.cloned(this, using);
  }

  cmp(other, compare = R.defaultCmp) {
    // -1, 0, 1
    return R.cmp(this, other, compare);
  }

  collect(closure = R.identity) {
    // [] | string
    return R.collect(this, closure);
  }

  rcollect(closure = R.identity) {
    return R.rcollect(this, closure);
  }

  collects(closure = R.identity) {
    // iterator
    return R.collects(this, closure);
  }

  rcollects(closure = R.identity) {
    return R.rcollects(this, closure);
  }

  copied(using = R.identity) {
    // iterator
    return R.copied(this, using);
  }

  count() {
    // number
    return R.count(this);
  }

  chain(other, ...rest) {
    // Chain
    return R.chain(this, other, ...rest);
  }

  cycle() {
    // Cycle
    return R.cycle(this);
  }

  empty() {
    return R.empty();
  }

  enumerate() {
    // Enumerate
    return R.enumerate(this);
  }

  eq(other, compare = (a, b) => a === b) {
    // boolean
    return R.eq(this, other, compare);
  }

  filter(predicate = R.istrue) {
    return R.filter(this, predicate);
  }

  filter_map(closure = R.identity) {
    return R.filter_map(this, closure);
  }

  filterMap(closure = R.identity) {
    return R.filter_map(this, closure);
  }

  find(predicate = R.istrue) {
    // value
    return R.find(this, predicate);
  }

  find_map(closure = R.identity) {
    return R.find_map(this, closure);
  }

  findMap(closure = R.identity) {
    return R.find_map(this, closure);
  }

  first() {
    return R.first(this);
  }

  flatten() {
    // Flatten
    return R.flatten(this);
  }

  flat_map(closure = R.identity) {
    // FlatMap
    return R.flat_map(this, closure);
  }

  flatMap(closure = R.identity) {
    return R.flat_map(this, closure);
  }

  fold(initialValue, closure = R.identity) {
    return R.fold(this, initialValue, closure);
  }

  for_each(closure = R.identity) {
    R.for_each(this, closure);
    return this;
  }

  forEach(closure = R.identity) {
    R.for_each(this, closure);
    return this;
  }

  from_fn(closure = R.identity) {
    return R.from_fn(closure);
  }

  fromFn(closure = R.identity) {
    return R.from_fn(closure);
  }

  fuse() {
    // Fuse
    return R.fuse(this);
  }

  ge(other, compare) {
    // boolean
    return R.ge(this, other, compare);
  }

  gt(other, compare) {
    return R.gt(this, other, compare);
  }

  head() {
    return R.head(this);
  }

  inspect(closure) {
    // Inspect
    return R.inspect(this, closure);
  }

  is_sorted(compare) {
    // boolean
    return R.is_sorted(this, compare);
  }

  isSorted(compare) {
    // boolean
    return R.is_sorted(this, compare);
  }

  is_sorted_by(closure) {
    // boolean
    return R.is_sorted_by(this, closure);
  }

  isSortedBy(closure) {
    return R.is_sorted_by(this, closure);
  }

  is_sorted_by_key(key, compare) {
    return R.is_sorted_by_key(this, key, compare);
  }

  isSortedByKey(key, compare) {
    return R.is_sorted_by_key(this, key, compare);
  }

  last() {
    return R.last(this);
  }

  le(other, compare) {
    return R.le(this, other, compare);
  }

  lt(other, compare) {
    return R.lt(this, other, compare);
  }

  map(closure) {
    // Map
    return R.map(this, closure);
  }

  max(closure = Math.max) {
    // value
    return R.max(this, closure);
  }

  max_by(closure = Math.max) {
    // value
    return R.max_by(this, closure);
  }

  maxBy(closure = Math.max) {
    return R.max_by(this, closure);
  }

  max_by_key(closure = R.identity, max = Math.max) {
    return R.max_by_key(this, closure, max);
  }

  maxByKey(closure = R.identity, max = Math.max) {
    return R.max_by_key(this, closure, max);
  }

  min(closure = Math.min) {
    // value
    return R.min(this, closure);
  }

  min_by(closure = Math.min) {
    return R.min_by(this, closure);
  }

  minBy(closure = Math.min) {
    return R.min_by(this, closure);
  }

  min_by_key(closure = R.identity, min = Math.min) {
    return R.min_by_key(this, closure, min);
  }

  minByKey(closure = R.identity, min = Math.min) {
    return R.min_by_key(this, closure, min);
  }

  ne(other, compare = (a, b) => a === b) {
    return R.ne(this, other, compare);
  }

  next() {
    return R.None;
  }

  next_back() {
    return R.None;
  }

  nextBack() {
    return this.next_back();
  }

  nth(n = 0) {
    return R.nth(this, n);
  }

  once(something) {
    return R.once(something);
  }

  once_with(closure) {
    return R.once_with(closure);
  }

  onceWith(closure) {
    return R.once_with(closure);
  }

  partial_cmp(other, compare = R.defaultCmp) {
    return R.partial_cmp(this, other, compare);
  }

  partialCmp(other, compare = R.defaultCmp) {
    return R.partial_cmp(this, other, compare);
  }

  partition(predicate) {
    return R.partition(this, predicate);
  }

  peekable() {
    return R.peekable(this);
  }

  position(predicate) {
    return R.position(this, predicate);
  }

  product(closure) {
    return R.product(this, closure);
  }

  range(from = 0, to = 0, step = 1) {
    return R.range(from, to, step);
  }

  reduce(closure, initialValue) {
    return R.reduce(this, closure, initialValue);
  }

  repeat(something) {
    return R.repeat(something);
  }

  repeat_with(closure) {
    return R.repeat_with(closure);
  }

  repeatWith(closure) {
    return R.repeat_with(closure);
  }

  rev() {
    return R.rev(this);
  }

  reverse() {
    return R.rev(this);
  }

  rposition(predicate) {
    return R.rposition(this, predicate);
  }

  scan(initialState, closure) {
    return R.scan(this, initialState, closure);
  }

  skip(n = 0) {
    return R.skip(this, n);
  }

  skip_while(predicate, n = 0, forward = true) {
    return R.skip_while(this, predicate, n, forward);
  }

  skipWhile(predicate, n = 0, forward = true) {
    return R.skip_while(this, predicate, n, forward);
  }

  step_by(step) {
    return R.step_by(this, step);
  }

  stepBy(step) {
    return R.step_by(this, step);
  }

  successors(initialValue, closure) {
    return R.successors(initialValue, closure);
  }

  sum(closure) {
    return R.sum(this, closure);
  }

  tail() {
    return R.tail(this);
  }

  take(n) {
    return R.take(this, n);
  }

  take_while(predicate) {
    return R.take_while(this, predicate);
  }

  takeWhile(predicate) {
    return R.take_while(this, predicate);
  }

  try_fold(initialValue, closure) {
    return R.try_fold(this, initialValue, closure);
  }

  tryFold(initialValue, closure) {
    return R.try_fold(this, initialValue, closure);
  }

  try_for_each(closure) {
    return R.try_for_each(this, closure);
  }

  tryForEach(closure) {
    return R.try_for_each(this, closure);
  }

  unzip(other, ...rest) {
    return R.unzip(this, other, ...rest);
  }

  zip(other, ...rest) {
    return R.zip(this, other, ...rest);
  }
}

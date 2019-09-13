import { Into, None, done } from "./into";

export class FilterMap extends Into {
  _predicate;
  constructor(iterable, predicate = v => v) {
    super(iterable);
    this._predicate = predicate;
  }

  next() {
    let c = super.next();
    if (done(c)) return None;

    let predicate = this._predicate;
    if (predicate(c.value)) return c;

    return this.next();
  }

  next_back() {
    let c = super.next_back();
    if (done(c)) return None;

    let predicate = this._predicate;
    if (predicate(c.value)) return c;

    return this.next_back();
  }
}

export default function filter_map(iterator, closure) {
  return new FilterMap(iterator, closure);
}

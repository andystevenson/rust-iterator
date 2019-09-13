import { Into, None, more } from "./into";

export class Filter extends Into {
  _predicate;
  constructor(iterable, predicate) {
    super(iterable);
    this._predicate = predicate;
  }

  next() {
    let c = super.next();
    let predicate = this._predicate;
    while (more(c)) {
      if (predicate(c.value)) return c;
      c = super.next();
    }

    return None;
  }
}

export default function filter(iterator, predicate) {
  return new Filter(iterator, predicate);
}

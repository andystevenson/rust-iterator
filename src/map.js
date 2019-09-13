import { Into, Some, None, done } from "./into";

export class Map extends Into {
  _closure;
  constructor(iterable, closure = v => v) {
    super(iterable);
    this._closure = closure;
  }

  next() {
    let c = super.next();
    if (done(c)) return None;
    return Some(this._closure(c.value));
  }

  next_back() {
    let c = super.next_back();
    if (done(c)) return None;
    return Some(this._closure(c.value));
  }
}

export default function map(iterator, closure = v => v) {
  return new Map(iterator, closure);
}

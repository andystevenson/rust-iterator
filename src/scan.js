import { Into, None, Some, done } from "./into";

export class Scan extends Into {
  _state;
  _closure = 0;
  constructor(iterable, initialState, closure) {
    super(iterable);
    this._state = Some(initialState);
    this._closure = closure;
  }

  next() {
    let c = super.next();
    if (done(c)) return None;

    return this._closure(this._state, c.value);
  }

  next_back() {
    let c = super.next_back();
    if (done(c)) return None;

    return this._closure(this._state, c.value);
  }
}

export default function scan(iterator, initialState, closure) {
  return new Scan(iterator, initialState, closure);
}

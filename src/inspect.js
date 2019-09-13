import { Into, None, done } from "./into";

export class Inspect extends Into {
  _closure;
  constructor(iterable, closure) {
    super(iterable);
    this._closure = closure;
  }

  next() {
    const c = super.next();
    if (done(c)) return None;
    const closure = this._closure;
    closure(c.value);
    return c;
  }

  next_back() {
    const c = super.next_back();
    if (done(c)) return None;
    const closure = this._closure;
    closure(c.value);
    return c;
  }
}

export default function inspect(iterator, closure) {
  return new Inspect(iterator, closure);
}

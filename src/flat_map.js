import into, { Into, more, done } from "./into";

export class FlatMap extends Into {
  _closure;
  _flatten;
  constructor(iterable, closure) {
    super(iterable);
    this._closure = closure;
  }

  next() {
    const flatten = this._flatten;
    let c;

    if (flatten) {
      c = flatten.next();
      if (more(c)) return c;
    }

    c = super.next();
    if (done(c)) return c;

    const closure = this._closure;
    this._flatten = into(closure(c.value));
    return this.next();
  }

  next_back() {
    const flatten = this._flatten;
    let c;

    if (flatten) {
      c = flatten.next_back();
      if (more(c)) return c;
    }

    c = super.next_back();
    if (done(c)) return c;

    const closure = this._closure;
    this._flatten = into(closure(c.value));
    return this.next_back();
  }
}

export default function flat_map(iterator, closure) {
  return new FlatMap(iterator, closure);
}

export const flatMap = flat_map;

import into, { Into, None, more, done } from "./into";

export class Flatten extends Into {
  _flatten;
  constructor(iterable) {
    super(iterable);
  }

  next() {
    const flatten = this._flatten;
    let c;

    if (flatten) {
      c = flatten.next();
      if (more(c)) return c;
    }

    c = super.next();
    if (done(c)) return None;

    this._flatten = into(c.value);
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
    if (done(c)) return None;

    this._flatten = into(c.value);
    return this.next_back();
  }
}

export default function flatten(iterator) {
  return new Flatten(iterator);
}

import { Into } from "./into";

export class Peekable extends Into {
  _peek;
  constructor(iterable) {
    super(iterable);
  }

  peek() {
    let p = this._peek;
    if (p) return p;
    p = this._peek = super.next();
    return p;
  }

  next() {
    const p = this._peek;
    this._peek = undefined;
    if (p) return p;
    return super.next();
  }

  next_back() {
    const p = this._peek;
    this._peek = undefined;
    if (p) return p;
    return super.next_back();
  }
}

export default function peekable(iterator) {
  return new Peekable(iterator);
}

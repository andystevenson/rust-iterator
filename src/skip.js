import { Into, done } from "./into";

export class Skip extends Into {
  _n;
  constructor(iterable, n = 0) {
    super(iterable);
    this._n = n;
    // skip forward
    while (n > 0) {
      n--;
      const c = super.next();
      if (done(c)) break;
    }
    // skip backwards
    while (n < 0) {
      n++;
      const c = super.next_back();
      if (done(c)) break;
    }
  }

  next() {
    if (this._n < 0) return super.next_back();
    return super.next();
  }

  next_back() {
    if (this._n > 0) return super.next();
    return super.next_back();
  }
}

export default function skip(iterator, n = 0) {
  return new Skip(iterator, n);
}

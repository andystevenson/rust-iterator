import { Into, None, done } from "./into";

export class Take extends Into {
  _n;
  _index = 0;
  constructor(iterable, n = 1) {
    super(iterable);
    this._n = n < 0 ? 0 : n;
  }

  next() {
    let index = this._index;
    let n = this._n;
    if (index < n) {
      let c = super.next();
      if (done(c)) return None;

      this._index++;
      return c;
    }
    return None;
  }

  next_back() {
    let index = this._index;
    let n = this._n;
    if (index < n) {
      let c = super.next_back();
      if (done(c)) return None;

      this._index++;
      return c;
    }
    return None;
  }
}

export default function take(iterator, n = 1) {
  return new Take(iterator, n);
}

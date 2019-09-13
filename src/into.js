import Iterator, { None, Some, done, more } from "./Iterator";
import DoubleEnded from "./DoubleEnded";

export class Into extends Iterator {
  _iter;
  _primitive = true;
  constructor(iterable) {
    super();
    if (iterable == null) {
      this._iter = [][Symbol.iterator]();
      this._primitive = true;
      return;
    }

    const i = iterable[Symbol.iterator];
    this._iter =
      typeof i === "function"
        ? iterable[Symbol.iterator]()
        : [iterable][Symbol.iterator]();
    this._primitive = !(iterable instanceof Iterator);
  }

  next() {
    if (this._primitive) {
      const c = this._iter.next();
      if (done(c)) return None;
      return Some(c.value);
    }
    return this._iter.next();
  }

  next_back() {
    return this.mutate().next_back();
  }

  mutate() {
    let i = this._iter;
    const iofde = i instanceof DoubleEnded;
    if (iofde) return i;

    // otherwise we're creating a DoubleEndedIterator to consume from

    i = this._iter = new DoubleEnded(i);
    return i;
  }

  get length() {
    return this.mutate().length;
  }
}

export { None, Some, done, more };

export default function into(iterable) {
  return new Into(iterable);
}

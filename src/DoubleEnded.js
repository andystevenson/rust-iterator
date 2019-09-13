import iter from "./iter";
import more from "./more";
import None from "./None";
import Iterator from "./Iterator";

export default class DoubleEnded extends Iterator {
  _iterator;
  _de = [];

  constructor(iterable) {
    super();
    let i = iterable;
    let iofde = i instanceof DoubleEnded;

    if (iofde) {
      // we're already dealing with DEI so consume it.
      this._iterator = i._iterator;
      this._de = i._de;
      return;
    } else {
      i = this._iterator = iter(iterable);
    }

    // ok we need to construct a DEI from iterable
    let c = i.next();
    while (more(c)) {
      this._de.push(c);
      c = i.next();
    }
  }

  get length() {
    return this._de.length;
  }

  next() {
    const de = this._de;
    if (de.length === 0) return None;
    return de.shift();
  }

  next_back() {
    const de = this._de;
    if (de.length === 0) return None;
    return de.pop();
  }
}

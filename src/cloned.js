import { Into, Some, None, more } from "./into";

export class Cloned extends Into {
  _clone;
  _using;
  _make() {
    // create the clone
    let clone = (this._clone = []);
    let using = this._using;

    let c = super.next();
    while (more(c)) {
      clone.push(using(c.value));
      c = super.next();
    }
  }

  constructor(iterable, using = Some) {
    super(iterable);
    this._using = using;
  }

  next() {
    const clone = this._clone;
    if (clone) {
      // clone exists...
      if (clone.length === 0) return None;
      return clone.shift();
    } else {
      this._make();
      return this.next();
    }
  }

  next_back() {
    const clone = this._clone;
    if (clone) {
      // clone exists...
      if (clone.length === 0) return None;
      return clone.pop();
    } else {
      this._make();
      return this.next_back();
    }
  }
}

export default function cloned(iterator, using = Some) {
  return new Cloned(iterator, using);
}

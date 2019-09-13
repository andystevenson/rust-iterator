import { Into } from "./into";
import None from "./None";
import more from "./more";

export class Copied extends Into {
  _copy;
  _using;
  constructor(iterable, using = v => v) {
    super(iterable);
    this._using = using;
  }

  next() {
    let copy = this._copy;
    if (copy) {
      // copy exists...
      if (copy.length === 0) return None;
      return copy.shift();
    } else {
      // create the copy
      copy = this._copy = [];

      let c = super.next();
      const using = this._using;
      while (more(c)) {
        copy.push(using(c));
        c = super.next();
      }
      return this.next();
    }
  }
}

export default function copied(iterator, using = v => v) {
  return new Copied(iterator, using);
}

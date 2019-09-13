import into, { Into, None, done } from "./into";

export class Chain extends Into {
  _iterators = [];
  _index = 0;
  _backIndex = 0;
  constructor(iterable, other, ...rest) {
    super(iterable);
    const i = this._iterators;
    i.push(into(other));
    i.push(...rest.map(i => into(i)));
    this._backIndex = i.length;
  }

  next() {
    // if index is 0 take from base
    let i = this._index;
    if (i === 0) {
      let c = super.next();
      if (done(c)) {
        this._index++;
        return this.next();
      }
      return c;
    }

    let it = this._iterators;
    let l = it.length;
    let final = l - 1;
    i = i - 1; // we're indexing into the extra iterators now
    let c = it[i].next();
    if (done(c)) {
      if (i === final) return None;
      this._index = i + 2;
      return this.next();
    } else {
      return c;
    }
  }

  next_back() {
    // we need to take from the back....
    let i = this._backIndex;
    if (i === 0) {
      let c = super.next_back();
      if (done(c)) return None; // end of the road going backwards
      return c;
    }

    let it = this._iterators;
    i = i - 1; // we're indexing into the extra iterators now
    let c = it[i].next_back();
    if (done(c)) {
      this._backIndex = i;
      return this.next_back();
    }
    return c;
  }
}

export default function chain(iterator, other, ...rest) {
  return new Chain(iterator, other, ...rest);
}

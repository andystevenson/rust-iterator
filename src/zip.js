import into, { Into, Some, None, done } from "./into";

export class Zip extends Into {
  _iterators = [];
  constructor(iterable, other, ...rest) {
    super(iterable);
    this._iterators.push(into(other));
    this._iterators.push(...rest.map(i => into(i)));
  }

  next() {
    const result = Some([]);
    const rv = result.value;
    const iters = this._iterators;
    for (let i = 0; i <= iters.length; i++) {
      const iter = iters[i - 1];
      const r = i ? iter.next() : super.next();
      if (done(r)) {
        return None;
      } else {
        rv.push(r.value);
      }
    }
    return result;
  }

  next_back() {
    const result = Some([]);
    const rv = result.value;
    const iters = this._iterators;
    for (let i = 0; i <= iters.length; i++) {
      const iter = iters[i - 1];
      const r = i ? iter.next_back() : super.next_back();
      if (done(r)) {
        return None;
      } else {
        rv.push(r.value);
      }
    }
    return result;
  }
}

export default function zip(iterator, other, ...rest) {
  return new Zip(iterator, other, ...rest);
}

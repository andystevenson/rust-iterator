import { Into, Some, None, done } from "./into";

export class Enumerate extends Into {
  _index = 0;
  _backIndex = -1;
  constructor(iterable) {
    super(iterable);
  }

  next() {
    const c = super.next();
    if (done(c)) return None;
    const result = Some([this._index, c.value]);
    this._index++;
    return result;
  }

  next_back() {
    const c = super.next_back();
    if (done(c)) return None;
    let length = super.length;
    let bi = this._backIndex;
    bi = bi === -1 ? length - 1 : bi;
    const result = Some([bi, c.value]);
    this._backIndex = bi - 1;
    return result;
  }
}

export default function enumerate(iterator) {
  return new Enumerate(iterator);
}

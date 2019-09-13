import { Into, None, more } from "./into";

export class Cycle extends Into {
  _cycle = [];
  _index = -1;
  _backIndex = -1;
  constructor(iterable) {
    super(iterable);
    let c = super.next();
    const cycle = this._cycle;
    while (more(c)) {
      cycle.push(c);
      c = super.next();
    }
  }

  next() {
    const cycle = this._cycle;
    const length = cycle.length;
    if (length === 0) return None;
    let i = this._index;
    i = i === -1 || i === length ? 0 : i;
    const c = cycle[i];
    this._index = i + 1;
    return c;
  }

  next_back() {
    const cycle = this._cycle;
    const length = cycle.length;
    if (length === 0) return None;
    let bi = this._backIndex;
    bi = bi === -1 ? length - 1 : bi;
    const c = cycle[bi];
    this._backIndex = bi - 1;
    return c;
  }
}

export default function cycle(iterator) {
  return new Cycle(iterator);
}

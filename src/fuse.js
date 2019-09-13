import { Into, None, done } from "./into";

export class Fuse extends Into {
  _done = false;
  constructor(iterable) {
    super(iterable);
  }

  next() {
    if (this._done) return None;
    let c = super.next();
    if ((this._done = done(c))) return None;
    return c;
  }

  next_back() {
    if (this._done) return None;
    let c = super.next_back();
    if ((this._done = done(c))) return None;
    return c;
  }
}

export default function fuse(iterator) {
  return new Fuse(iterator);
}

import { Into, None, done } from "./into";

export class TakeWhile extends Into {
  _predicate;
  constructor(iterable, predicate) {
    super(iterable);
    this._predicate = predicate;
  }

  next() {
    let c = super.next();
    let predicate = this._predicate;
    if (done(c) || predicate(c.value)) return c;
    this._predicate = () => false;
    return None;
  }

  next_back() {
    let c = super.next_back();
    let predicate = this._predicate;
    if (done(c) || predicate(c.value)) return c;
    this._predicate = () => false;
    return None;
  }
}

export default function take_while(iterator, predicate) {
  return new TakeWhile(iterator, predicate);
}

import { done } from "./into";
import { Skip } from "./skip";

export class SkipWhile extends Skip {
  _predicate;
  _next;
  _next_back;
  _forward;
  constructor(iterable, predicate, n = 0, forward = true) {
    super(iterable, n);
    this._predicate = predicate;
    this._forward = forward;
    // forward skip
    while (n >= 0 && forward) {
      this._n = 1;
      const c = super.next();
      if (done(c)) return;
      if (!predicate(c.value)) {
        this._next = c;
        return;
      }
    }

    while (n <= 0 && !forward) {
      this._n = -1;
      const c = super.next_back();
      if (done(c)) return;
      if (!predicate(c.value)) {
        this._next_back = c;
        return;
      }
    }
  }

  next() {
    const forward = this._forward;
    if (!forward) return this.next_back();

    const c = this._next;
    if (c) {
      this._next = undefined;
      return c;
    }
    return super.next();
  }

  next_back() {
    const forward = this._forward;
    if (forward) return this.next();

    const c = this._next_back;
    if (c) {
      this._next_back = undefined;
      return c;
    }
    return super.next_back();
  }
}

export default function skip_while(iterator, predicate, n = 0, forward = true) {
  return new SkipWhile(iterator, predicate, n, forward);
}

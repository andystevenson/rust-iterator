import { Into } from "./into";

export class StepBy extends Into {
  _step;
  _front;
  _back;
  constructor(iterable, step = 1) {
    super(iterable);
    this._step = step < 1 ? 1 : step;
  }

  next() {
    // first time through
    let c = this._front;
    if (!c) {
      c = this._front = super.next();
      return c;
    }

    let n = this._step;
    for (let index = 0; index < n; index++) {
      c = super.next();
    }
    return c;
  }

  next_back() {
    // first time through
    let c = this._back;
    if (!c) {
      c = this._back = super.next_back();
      return c;
    }

    let n = this._step;
    for (let index = 0; index < n; index++) {
      c = super.next_back();
    }
    return c;
  }
}

export default function step_by(iterator, step = 1) {
  return new StepBy(iterator, step);
}

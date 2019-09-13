import { Into, Some, None } from "./into";

export class Range extends Into {
  _from;
  _to;
  _step;
  _front;
  _back;
  constructor(from = 0, to = 0, step = 1) {
    super();
    this._from = this._front = from;
    this._to = to;
    this._step = step;
    this._back = to - step;
    // should do some validation
  }

  next() {
    const from = this._from;
    let front = this._front;
    const back = this._back;
    const to = this._to;
    if (front >= to || back < from || back < front) return None;
    this._front = front + this._step;
    return Some(front);
  }

  next_back() {
    const from = this._from;
    let front = this._front;
    const back = this._back;
    const to = this._to;
    if (front >= to || back < from || back < front) return None;
    this._back = back - this._step;
    return Some(back);
  }
}

export default function range(from = 0, to = 0, step = 1) {
  return new Range(from, to, step);
}

import { Into, None } from "./into";

export class FromFn extends Into {
  _closure;
  constructor(closure = () => None) {
    super(undefined);
    this._closure = closure;
  }

  next() {
    return this._closure();
  }

  next_back() {
    return this._closure();
  }
}

export default function from_fn(closure) {
  return new FromFn(closure);
}

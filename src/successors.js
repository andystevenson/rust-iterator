import { Into, Some, None } from "./into";

export class Successors extends Into {
  _closure;
  _initial;
  _then;
  constructor(initialValue, closure = () => None) {
    super();
    this._closure = closure;
    this._initial = initialValue;
  }

  next() {
    let then = this._then;
    if (!then) {
      const initial = this._initial;
      return (this._then = Some(initial));
    }

    then = this._closure(then.value);
    this._then = then;
    return then;
  }
}

export default function successors(initialValue, closure) {
  return new Successors(initialValue, closure);
}

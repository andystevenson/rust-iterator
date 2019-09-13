import { Into, Some } from "./into";

export class Repeat extends Into {
  _do;
  constructor(something) {
    super();
    this._do = something;
  }

  next() {
    let what = this._do;
    let type = typeof what;
    if (type === "function") {
      return Some(what());
    } else {
      return Some(what);
    }
  }
}

export default function repeat(something) {
  return new Repeat(something);
}

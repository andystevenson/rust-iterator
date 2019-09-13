import { Into, Some, None } from "./into";

export class Once extends Into {
  _do;
  constructor(something) {
    super(undefined);
    this._do = something;
  }

  next() {
    let what = this._do;
    let type = typeof what;
    if (type === "function") {
      this._do = undefined;
      return Some(what());
    } else if (type !== "undefined") {
      return Some(what);
    }
    return None;
  }

  next_back() {
    this.next();
  }
}

export default function once(something) {
  return new Once(something);
}

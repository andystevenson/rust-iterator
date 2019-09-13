class some {
  constructor(value) {
    this._v = value;
  }

  get done() {
    return false;
  }

  get value() {
    return this._v;
  }

  set value(v) {
    return (this._v = v);
  }
}

export default value => new some(value);

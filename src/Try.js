export default class Try {
  constructor(okOrError) {
    if (okOrError instanceof Error) {
      this.err = okOrError;
    } else {
      this.ok = okOrError;
    }
  }
}

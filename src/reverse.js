import { Into } from "./into";

export class Reverse extends Into {
  constructor(iterable) {
    super(iterable);
  }

  next() {
    return super.next_back();
  }

  next_back() {
    return super.next();
  }
}

export default function reverse(iterator) {
  return new Reverse(iterator);
}

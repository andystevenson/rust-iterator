import { Once } from "./once";

export class OnceWith extends Once {
  constructor(closure) {
    super(closure);
  }
}

export default function once_with(closure) {
  return new OnceWith(closure);
}

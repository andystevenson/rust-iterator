import { Repeat } from "./repeat";

export default function repeat_with(closure) {
  return new Repeat(closure);
}

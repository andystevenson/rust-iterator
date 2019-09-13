import { Into } from "./into";

export default function iter(iterable) {
  return new Into(iterable);
}

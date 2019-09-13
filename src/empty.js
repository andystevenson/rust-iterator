import { Into } from "./into";

export class Empty extends Into {}

export default function empty() {
  return new Empty();
}

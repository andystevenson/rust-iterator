import Iterator from "./Iterator";
import iter from "./iter";
import more from "./more";

export default function tail(iterable) {
  const t =
    iterable instanceof Iterator ? iterable.back() : iter(iterable).back();
  return more(t) ? t.value : undefined;
}

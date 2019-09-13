import { count, iter } from "methods";

describe("count", () => {
  test.each([[undefined, 0], [[1], 1], [[1, 2, 3, 4], 4]])(
    "basic",
    (iterable, expected) => {
      expect(count(iterable)).toBe(expected);
      expect(iter(iterable).count()).toBe(expected);
    }
  );
});

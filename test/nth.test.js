import { nth, iter } from "methods";

describe("nth", () => {
  test("basic", () => {
    expect(nth()).toBe(undefined);
    expect(nth([1, 2, 3], 0)).toBe(1);
    expect(nth([1, 2, 3], 1)).toBe(2);
    expect(nth([1, 2, 3], 2)).toBe(3);

    let i = iter([1, 2, 3]);
    expect(i.nth(0)).toBe(1);
    expect(i.nth(0)).toBe(2);
    expect(i.nth(0)).toBe(3);
  });
});

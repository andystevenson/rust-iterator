import { partial_cmp, partialCmp, iter } from "methods";

describe("./partial_cmp", () => {
  test("basic", () => {
    expect(partial_cmp()).toBe(0);
    expect(partialCmp()).toBe(0);
    expect(partial_cmp("abc", "abc")).toBe(0);
    expect(partialCmp("abc", "abc")).toBe(0);
    expect(partial_cmp([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(partialCmp([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(partial_cmp([1, 2, 3], [1, 2, 3, 4])).toBe(-1);
    expect(partialCmp([1, 2, 3], [1, 2, 3, 4])).toBe(-1);
    expect(partial_cmp([1, 2, 3, 4], [1, 2, 3])).toBe(1);
    expect(partialCmp([1, 2, 3, 4], [1, 2, 3])).toBe(1);
  });
  test("function", () => {
    expect(iter().partial_cmp()).toBe(0);
    expect(iter().partialCmp()).toBe(0);
    expect(iter("abc").partial_cmp("abc")).toBe(0);
    expect(iter("abc").partialCmp("abc")).toBe(0);
    expect(iter([1, 2, 3]).partial_cmp([1, 2, 3])).toBe(0);
    expect(iter([1, 2, 3]).partialCmp([1, 2, 3])).toBe(0);
    expect(iter([1, 2, 3]).partial_cmp([1, 2, 3, 4])).toBe(-1);
    expect(iter([1, 2, 3]).partialCmp([1, 2, 3, 4])).toBe(-1);
    expect(iter([1, 2, 3, 4]).partial_cmp([1, 2, 3])).toBe(1);
    expect(iter([1, 2, 3, 4]).partialCmp([1, 2, 3])).toBe(1);
  });

  test("compare", () => {
    const a = { a: 1, b: "one" };
    const b = { a: 2, b: "two" };
    const compare = (a, b) => (a.a === b.a ? 0 : a.a < b.a ? -1 : 1);
    expect(iter(a).partial_cmp(b, compare)).toBe(-1);
    expect(iter(a).partialCmp(b, compare)).toBe(-1);
    a.a = 2;
    expect(iter(a).partial_cmp(b, compare)).toBe(0);
    expect(iter(a).partialCmp(b, compare)).toBe(0);
    b.a = 1;
    expect(iter(a).partial_cmp(b, compare)).toBe(1);
    expect(iter(a).partialCmp(b, compare)).toBe(1);
  });
});

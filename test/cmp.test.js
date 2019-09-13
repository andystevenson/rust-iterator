import { cmp, iter } from "methods";

describe("./cmp", () => {
  test("basic", () => {
    expect(cmp()).toBe(0);
    expect(cmp("abc", "abc")).toBe(0);
    expect(cmp([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(cmp([1, 2, 3], [1, 2, 3, 4])).toBe(-1);
    expect(cmp([1, 2, 3, 4], [1, 2, 3])).toBe(1);
  });
  test("function", () => {
    expect(iter().cmp()).toBe(0);
    expect(iter("abc").cmp("abc")).toBe(0);
    expect(iter([1, 2, 3]).cmp([1, 2, 3])).toBe(0);
    expect(iter([1, 2, 3]).cmp([1, 2, 3, 4])).toBe(-1);
    expect(iter([1, 2, 3, 4]).cmp([1, 2, 3])).toBe(1);
  });

  test("compare", () => {
    const a = { a: 1, b: "one" };
    const b = { a: 2, b: "two" };
    const compare = (a, b) => (a.a === b.a ? 0 : a.a < b.a ? -1 : 1);
    expect(iter(a).cmp(b, compare)).toBe(-1);
    a.a = 2;
    expect(iter(a).cmp(b, compare)).toBe(0);
    b.a = 1;
    expect(iter(a).cmp(b, compare)).toBe(1);
  });
});

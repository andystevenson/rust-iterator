import { le, iter } from "methods";

describe("le", () => {
  test("empty", () => {
    let a = iter();
    let b = iter();
    expect(le(a, b)).toBeTrue();
  });

  test.each([
    [undefined, undefined, true],
    [1, 1, true],
    ["", "", true],
    [[], [], true],
    [1, 2, true],
    [2, 1, false],
    ["abc", "abc", true],
    ["abcd", "abc", false],
    ["abc", "abcd", true],
    [[1], [1], true],
    [[1, 2], [1], false],
    [[1], [1, 2], true]
  ])("equals %#", (a, b, result) => {
    expect(le(a, b)).toBe(result);
    expect(iter(a).le(b)).toBe(result);
  });
});

import { eq, iter } from "methods";

describe("eq", () => {
  test("empty", () => {
    let a = iter();
    let b = iter();
    expect(eq(a, b)).toBeTrue();
  });

  test.each([
    [undefined, undefined, true],
    [1, 1, true],
    ["", "", true],
    [[], [], true],
    [1, 2, false],
    ["abc", "abc", true],
    ["abcd", "abc", false],
    ["abc", "abcd", false],
    [[1], [1], true],
    [[1, 2], [1], false],
    [[1], [1, 2], false]
  ])("equals %#", (a, b, result) => {
    expect(eq(a, b)).toBe(result);
    expect(iter(a).eq(b)).toBe(result);
  });
});

import { ge, iter } from "methods";

describe("ge", () => {
  test("empty", () => {
    let a = iter();
    let b = iter();
    expect(ge(a, b)).toBeTrue();
  });

  test.each([
    [undefined, undefined, true],
    [1, 1, true],
    ["", "", true],
    [[], [], true],
    [1, 2, false],
    ["abc", "abc", true],
    ["abcd", "abc", true],
    ["abc", "abcd", false],
    [[1], [1], true],
    [[1, 2], [1], true],
    [[1], [1, 2], false]
  ])("equals %#", (a, b, result) => {
    expect(ge(a, b)).toBe(result);
    expect(iter(a).ge(b)).toBe(result);
  });
});

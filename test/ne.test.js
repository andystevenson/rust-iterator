import { ne, iter } from "methods";

describe("ne", () => {
  test("empty", () => {
    let a = iter();
    let b = iter();
    expect(ne(a, b)).toBeFalse();
  });

  test.each([
    [undefined, undefined, false],
    [1, 1, false],
    ["", "", false],
    [[], [], false],
    [1, 2, true],
    ["abc", "abc", false],
    ["abcd", "abc", true],
    ["abc", "abcd", true],
    [[1], [1], false],
    [[1, 2], [1], true],
    [[1], [1, 2], true]
  ])("equals %#", (a, b, result) => {
    expect(ne(a, b)).toBe(result);
    expect(iter(a).ne(b)).toBe(result);
  });
});

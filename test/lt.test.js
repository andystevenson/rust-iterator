import { lt, iter } from "methods";

describe("lt", () => {
  test("empty", () => {
    let a = iter();
    let b = iter();
    expect(lt(a, b)).toBeFalse();
  });

  test.each([
    [undefined, undefined, false],
    [1, 1, false],
    ["", "", false],
    [[], [], false],
    [1, 2, true],
    [2, 1, false],
    ["abc", "abc", false],
    ["abcd", "abc", false],
    ["abc", "abcd", true],
    [[1], [1], false],
    [[1, 2], [1], false],
    [[1], [1, 2], true]
  ])("equals %#", (a, b, result) => {
    expect(lt(a, b)).toBe(result);
    expect(iter(a).lt(b)).toBe(result);
  });
});

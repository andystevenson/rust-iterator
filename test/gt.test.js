import { gt, iter } from "methods";

describe("gt", () => {
  test("empty", () => {
    let a = iter();
    let b = iter();
    expect(gt(a, b)).toBeFalse();
  });

  test.each([
    [undefined, undefined, false],
    [1, 1, false],
    ["", "", false],
    [[], [], false],
    [1, 2, false],
    ["abc", "abc", false],
    ["abcd", "abc", true],
    ["abc", "abcd", false],
    [[1], [1], false],
    [[1, 2], [1], true],
    [[1], [1, 2], false]
  ])("equals %#", (a, b, result) => {
    expect(gt(a, b)).toBe(result);
    expect(iter(a).gt(b)).toBe(result);
  });
});

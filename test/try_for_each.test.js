import { try_for_each, tryForEach, iter } from "methods";

describe("try_for_each", () => {
  test("basic", () => {
    let a = [1, 2, 3];
    let result = [];
    iter(a).try_for_each(x => result.push(x ** 2));
    expect(result).toEqual([1, 4, 9]);
    result = [];
    iter(a).tryForEach(x => result.push(x ** 2));
    expect(result).toEqual([1, 4, 9]);
    result = [];
    try_for_each(a, x => result.push(x ** 2));
    expect(result).toEqual([1, 4, 9]);
    result = [];
    tryForEach(a, x => result.push(x ** 2));
    expect(result).toEqual([1, 4, 9]);
  });
});

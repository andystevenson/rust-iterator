import {
  is_sorted,
  isSorted,
  is_sorted_by,
  isSortedBy,
  is_sorted_by_key,
  isSortedByKey,
  empty,
  iter
} from "methods";

describe("sorted", () => {
  test.each([
    [[1, 2, 2, 9], true],
    [[1, 3, 2, 4], false],
    [undefined, true],
    [[0], true],
    [empty(), true],
    [[0.0, 1.0, NaN], false],
    [[], true],
    [[1], true],
    [[1, 2, 3, 4], true],
    [[-1, 1, 2, 3, 4], true],
    [[-1, 1, 2, 3, 2], false],
    [[2, 1, 2, 3, 2], false],
    [[-1, -2, 2, 3, 4], false]
  ])("basic", (iterable, result) => {
    /*
      assert!([1, 2, 2, 9].iter().is_sorted());
      assert!(![1, 3, 2, 4].iter().is_sorted());
      assert!([0].iter().is_sorted());
      assert!(std::iter::empty::<i32>().is_sorted());
      assert!(![0.0, 1.0, std::f32::NAN].iter().is_sorted());
    */
    let a = iterable;
    const predicate = (x, y) => x <= y;
    expect(is_sorted(a)).toBe(result);
    expect(isSorted(a)).toBe(result);
    expect(iter(a).isSorted()).toBe(result);
    expect(is_sorted_by(a, predicate)).toBe(result);
    expect(isSortedBy(a, predicate)).toBe(result);
    expect(iter(a).isSortedBy(predicate)).toBe(result);
  });

  test.each([
    [[1, 2, 2, 9], true],
    [[1, 3, 2, 4], false],
    [undefined, true],
    [[0], true],
    [empty(), true],
    [[0.0, 1.0, NaN], false],
    [[], true],
    [[1], true],
    [[1, 2, 3, 4], true],
    [[-1, 1, 2, 3, 4], true],
    [[-1, 1, 2, 3, 2], false],
    [[2, 1, 2, 3, 2], false],
    [[-1, -2, 2, 3, 4], true]
  ])("basic %#", (iterable, result) => {
    let a = iterable;
    const key = Math.abs;
    const predicate = (x, y) => x <= y;
    expect(is_sorted_by_key(a, key, predicate)).toBe(result);
    expect(isSortedByKey(a, key, predicate)).toBe(result);
    expect(iter(a).isSortedByKey(key, predicate)).toBe(result);
  });
});

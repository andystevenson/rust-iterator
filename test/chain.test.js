import { chain, Some, None } from "methods";
import { chain as echain } from "eager";

describe("chain", () => {
  test("basic", () => {
    let iter = chain([1, 2], 3, 4, [5, 6]);
    expect(iter.collect()).toEqual([1, 2, 3, 4, 5, 6]);
    iter = chain([1, 2], [3, 4], [5, 6]);
    expect(iter.sum()).toEqual(21);
    iter = chain([1, 2, 3], 4, 5);
    expect(iter.next_back()).toEqual(Some(5));
    expect(iter.next_back()).toEqual(Some(4));
    expect(iter.next_back()).toEqual(Some(3));
    expect(iter.next_back()).toEqual(Some(2));
    expect(iter.next_back()).toEqual(Some(1));
    expect(iter.next_back()).toEqual(None);
    expect(iter.next_back()).toEqual(None);
    iter = chain([1, 2, 3], 4, 5);
    expect(iter.back()).toEqual(Some(5));
    expect(iter.next()).toEqual(Some(1));
    expect(iter.back()).toEqual(Some(4));
    expect(iter.next()).toEqual(Some(2));
    expect(iter.back()).toEqual(Some(3));
    expect(iter.next()).toEqual(None);
    expect(iter.back()).toEqual(None);
  });

  test("methods", () => {
    let iter = chain([1], [2]);
    iter = iter.chain([3]);
    expect(iter.chain([4], 5).collect(v => v ** 2)).toEqual([1, 4, 9, 16, 25]);
  });

  test("empty", () => {
    let iter = chain();
    expect(iter.next()).toEqual(None);
    iter = chain([]);
    expect(iter.next()).toEqual(None);
    iter = chain([], [], []);
    expect(iter.next()).toEqual(None);
  });

  test("eager", () => {
    // eager version calls .collect() on the lazy chain
    expect(echain([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

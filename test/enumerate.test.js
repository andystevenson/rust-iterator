import { enumerate, iter, None } from "methods";

describe("enumerate", () => {
  test("basic", () => {
    let e = enumerate([1, 2, 3]);
    expect(e.next().value).toEqual([0, 1]);
    expect(e.next().value).toEqual([1, 2]);
    expect(e.next().value).toEqual([2, 3]);
    expect(e.next()).toEqual(None);
    expect(e.next()).toEqual(None);
  });
  test("collect", () => {
    let e = iter([1, 2, 3])
      .enumerate()
      .collect();
    expect(e).toEqual([[0, 1], [1, 2], [2, 3]]);
  });

  test("rcollect", () => {
    let e = iter([1, 2, 3])
      .enumerate()
      .rcollect();
    expect(e).toEqual([[2, 3], [1, 2], [0, 1]]);
  });
});

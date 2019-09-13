import { range, iter, None } from "methods";

describe("range", () => {
  test("basic", () => {
    let r = range(1, 5);
    expect(r.collect()).toEqual([1, 2, 3, 4]);
    r = range(1, 5);
    expect(r.rcollect()).toEqual([4, 3, 2, 1]);
    r = range(1, 4);
    expect(r.next().value).toBe(1);
    expect(r.back().value).toBe(3);
    expect(r.back().value).toBe(2);
    expect(r.back()).toEqual(None);
    expect(r.next()).toEqual(None);

    r = range(1, 4);
    expect(r.next().value).toBe(1);
    expect(r.back().value).toBe(3);
    expect(r.next().value).toBe(2);
    expect(r.next()).toEqual(None);
    expect(r.back()).toEqual(None);
  });

  test("step", () => {
    let r = iter()
      .range(0, 100, 10)
      .collect();
    expect(r).toEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90]);
    r = iter()
      .range(0, 100, 10)
      .rcollect();
    expect(r).toEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].reverse());
  });
});

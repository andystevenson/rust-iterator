import { cycle, iter, None } from "methods";

describe("cycle", () => {
  test("empty", () => {
    let c = cycle();
    expect(c.next()).toEqual(None);
    expect(c.next()).toEqual(None);
    expect(c.next()).toEqual(None);
    expect(c.next()).toEqual(None);
    expect(c.next()).toEqual(None);
    c = cycle();
    expect(c.next_back()).toEqual(None);
    expect(c.next_back()).toEqual(None);
    expect(c.next_back()).toEqual(None);
    expect(c.next_back()).toEqual(None);
    expect(c.next_back()).toEqual(None);
  });

  test("forward one", () => {
    let c = cycle(1);
    for (let i = 0; i < 5; i++) expect(c.next().value).toBe(1);
  });

  test("backward one", () => {
    let c = cycle(1);
    for (let i = 0; i < 5; i++) expect(c.next_back().value).toBe(1);
  });

  test("forward n", () => {
    let a = [1, 2, 3];
    let c = cycle(a);
    for (let i = 0; i < 10; i++) {
      const v = c.next().value;
      const n = a[(v - 1) % 3];
      expect(v).toBe(n);
    }
  });

  test("backward n", () => {
    let a = [1, 2, 3];
    let c = cycle(a);
    for (let i = 0; i < 10; i++) {
      const v = c.next_back().value;
      const n = a[(v - 1) % 3];
      expect(v).toBe(n);
    }
  });

  test("backwards & forwards", () => {
    let a = [1, 2, 3];
    let c = iter(a).cycle();
    let v = c.next().value;
    let n = c.back().value;
    expect([v, n]).toEqual([1, 3]);
    v = c.next().value;
    n = c.back().value;
    expect([v, n]).toEqual([2, 2]);
    v = c.next().value;
    n = c.back().value;
    expect([v, n]).toEqual([3, 1]);
    v = c.next().value;
    n = c.back().value;
    expect([v, n]).toEqual([1, 3]);
    v = c.next().value;
    n = c.back().value;
    expect([v, n]).toEqual([2, 2]);
    v = c.next().value;
    n = c.back().value;
    expect([v, n]).toEqual([3, 1]);
    v = c.next().value;
    n = c.back().value;
    expect([v, n]).toEqual([1, 3]);
    v = c.next().value;
    n = c.back().value;
    expect([v, n]).toEqual([2, 2]);
    v = c.next().value;
    n = c.back().value;
    expect([v, n]).toEqual([3, 1]);
  });

  test("take", () => {
    const n = Math.floor(Math.random() * 100);
    let a = cycle([1, 2, 3])
      .take(n)
      .collect();
    expect(a).toHaveLength(n);
  });
});

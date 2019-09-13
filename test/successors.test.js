import { Some, None, collect, successors } from "methods";

describe("successors", () => {
  test("all", () => {
    const powers_of_10 = successors(1, v => (v < 10000 ? Some(v * 10) : None));
    expect(powers_of_10.collect())
      .toHaveLength(5)
      .toEqual([1, 10, 100, 1000, 10000]);

    const binary = successors(1, v => (v < 2 ** 10 ? Some(v << 1) : None));
    expect(collect(binary)).toEqual([
      1,
      2,
      4,
      8,
      16,
      32,
      64,
      128,
      256,
      512,
      1024
    ]);
  });
});

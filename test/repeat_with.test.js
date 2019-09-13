import { collect, repeat_with } from "methods";

describe("repeat_with", () => {
  test("all", () => {
    let curr = 1;
    let rw = repeat_with(() => (curr *= 2)).take(4);
    let result = collect(rw);
    expect(result).toEqual([2, 4, 8, 16]);
  });
});

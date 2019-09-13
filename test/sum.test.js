import { sum, iter } from "methods";

describe("sum", () => {
  test("basic", () => {
    /*
      let a = [1, 2, 3];
      let sum: i32 = a.iter().sum();

      assert_eq!(sum, 6);
    */
    let a = [1, 2, 3];
    let s = iter(a).sum();

    expect(s).toEqual(6);

    s = sum(a);
    expect(s).toEqual(6);
  });
});

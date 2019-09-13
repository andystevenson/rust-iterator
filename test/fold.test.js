import { fold, iter } from "methods";

describe("fold", () => {
  test("basic", () => {
    /*
      let a = [1, 2, 3];

      // the sum of all of the elements of the array
      let sum = a.iter().fold(0, |acc, x| acc + x);

      assert_eq!(sum, 6);
    */
    let a = [1, 2, 3];
    const closure = (acc, x) => acc + x;
    let sum = fold(a, 0, closure);
    expect(sum).toBe(6);
    expect(iter(a).fold(0, closure)).toBe(6);
  });
});

import { partition, iter } from "methods";

describe("partition", () => {
  test("basic", () => {
    /*
      let a = [1, 2, 3];
      let (even, odd): (Vec<i32>, Vec<i32>) = a
          .iter()
          .partition(|&n| n % 2 == 0);
      assert_eq!(even, vec![2]);
      assert_eq!(odd, vec![1, 3]);
    */
    let a = [1, 2, 3];

    let [even, odd] = iter(a).partition(n => n % 2 == 0);

    expect(even).toEqual([2]);
    expect(odd).toEqual([1, 3]);

    let [e, o] = partition(a, n => n % 2 == 0);

    expect(e).toEqual([2]);
    expect(o).toEqual([1, 3]);
  });
});

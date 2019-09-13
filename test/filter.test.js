import { filter, into, None } from "methods";

describe("filter", () => {
  test("basic", () => {
    /*
      let a = [0i32, 1, 2];
      let mut iter = a.iter().filter(|x| x.is_positive());

      assert_eq!(iter.next(), Some(&1));
      assert_eq!(iter.next(), Some(&2));
      assert_eq!(iter.next(), None);
    */
    let a = [0, 1, 2];
    let iter = filter(a, x => x > 0);
    expect(iter.next().value).toBe(1);
    expect(iter.next().value).toBe(2);
    expect(iter.next()).toEqual(None);

    iter = into(a)
      .filter(x => x > 0)
      .collect();
    expect(iter).toEqual([1, 2]);
  });
});

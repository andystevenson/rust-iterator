import { all, iter } from "methods";

describe("None", () => {
  test("basic usage", () => {
    /*
      let a = [1, 2, 3];
      assert!(a.iter().all(|&x| x > 0));
      assert!(!a.iter().all(|&x| x > 2));
    */
    expect(all([1, 2, 3], x => x > 0)).toBeTrue();
    expect(all([1, 2, 3], x => x > 2)).toBeFalse();
  });

  test("stopping at first false", () => {
    /*
      let a = [1, 2, 3];
      let mut iter = a.iter();
      assert!(!iter.all(|&x| x != 2));

      // we can still use `iter`, as there are more elements.
      assert_eq!(iter.next(), Some(&3));
    */
    let a = [1, 2, 3];
    let i = iter(a);
    expect(i.all(x => x !== 2)).toBeFalse();
    expect(i.next().value).toBe(3);
  });

  test("empty", () => {
    expect(all([])).toBeTrue();
    expect(iter([]).all()).toBeTrue();
    expect(iter().all()).toBeTrue();
  });
});

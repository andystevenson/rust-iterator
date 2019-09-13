import { any, iter } from "methods";

describe("None", () => {
  test("basic usage", () => {
    /*
      let a = [1, 2, 3];
    ` assert!(a.iter().any(|&x| x > 0));
      assert!(!a.iter().any(|&x| x > 5));
    */

    let a = [1, 2, 3];
    expect(any(a, x => x > 0)).toBeTrue();
    expect(iter(a).any(x => x > 0)).toBeTrue();
    expect(any(a, x => x > 5)).toBeFalse();
    expect(iter(a).any(x => x > 5)).toBeFalse();
  });

  test("stopping at first true", () => {
    /*
      let a = [1, 2, 3];
      let mut iter = a.iter();
      assert!(iter.any(|&x| x != 2));

      // we can still use `iter`, as there are more elements.
      assert_eq!(iter.next(), Some(&2));
    */
    let a = [1, 2, 3];
    let i = iter(a);
    expect(any(a, x => x !== 2)).toBeTrue();
    expect(i.any(x => x !== 2)).toBeTrue();
    expect(i.next().value).toBe(2);
  });

  test("empty", () => {
    expect(any([])).toBeFalse();
    expect(iter([]).any()).toBeFalse();
    expect(iter().any()).toBeFalse();
  });
});

import { find, into, None, Some } from "methods";

describe("find", () => {
  test("basic", () => {
    /*
      let a = [1, 2, 3];

      assert_eq!(a.iter().find(|&&x| x == 2), Some(&2));
      assert_eq!(a.iter().find(|&&x| x == 5), None);

      Stopping at the first true:

      let a = [1, 2, 3];
      let mut iter = a.iter();
      assert_eq!(iter.find(|&&x| x == 2), Some(&2));
      // we can still use `iter`, as there are more elements.
      assert_eq!(iter.next(), Some(&3));
    */
    let a = [1, 2, 3];
    let iter = find(a, x => x === 2);
    expect(iter).toEqual(Some(2));
    iter = find(a, x => x === 5);
    expect(iter).toEqual(None);

    iter = into(a);
    expect(iter.find(x => x === 2)).toEqual(Some(2));
    expect(iter.next().value).toBe(3);
    expect(iter.next()).toEqual(None);
  });
});

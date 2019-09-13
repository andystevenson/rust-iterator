import { position, rposition, iter, Some } from "methods";

describe("position", () => {
  test("basic", () => {
    /*
      let a = [1, 2, 3];
      assert_eq!(a.iter().position(|&x| x == 2), Some(1));
      assert_eq!(a.iter().position(|&x| x == 5), None);
    */
    let a = [1, 2, 3];
    expect(iter(a).position(x => x === 2)).toEqual(1);
    expect(position(a, x => x === 2)).toEqual(1);
    expect(iter(a).position(x => x === 5)).toEqual(-1);
    expect(position(a, x => x === 5)).toEqual(-1);
  });
  test("first true", () => {
    /*
      let a = [1, 2, 3, 4];
      let mut iter = a.iter();
      assert_eq!(iter.position(|&x| x >= 2), Some(1));
      // we can still use `iter`, as there are more elements.
      assert_eq!(iter.next(), Some(&3));
      // The returned index depends on iterator state
      assert_eq!(iter.position(|&x| x == 4), Some(0));
    */
    let a = [1, 2, 3, 4];
    let i = iter(a);

    expect(i.position(x => x >= 2)).toEqual(1);

    // we can still use `iter`, as there are more elements.
    expect(i.next()).toEqual(Some(3));

    // The returned index depends on iterator state
    expect(i.position(x => x === 4)).toEqual(0);
  });
  test("rposition", () => {
    /*
      let a = [1, 2, 3];
      assert_eq!(a.iter().rposition(|&x| x == 3), Some(2));
      assert_eq!(a.iter().rposition(|&x| x == 5), None);
    */
    let a = [1, 2, 3];
    expect(iter(a).rposition(x => x == 3)).toEqual(2);
    expect(rposition(a, x => x == 3)).toEqual(2);
    expect(iter(a).rposition(x => x == 5)).toEqual(-1);
    expect(rposition(a, x => x == 5)).toEqual(-1);
  });
  test("riter first true", () => {
    /*
      let a = [1, 2, 3];
      let mut iter = a.iter();
      assert_eq!(iter.rposition(|&x| x == 2), Some(1));
      // we can still use `iter`, as there are more elements.
      assert_eq!(iter.next(), Some(&1));
    */
    let a = [1, 2, 3];

    let i = iter(a);

    expect(i.rposition(x => x === 2)).toEqual(1);
    // we can still use `iter`, as there are more elements.
    //expect(i.next()).toEqual(Some(1));
    expect(rposition(a, x => x === 2)).toEqual(1);
  });
});

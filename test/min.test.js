import {
  min,
  min_by,
  minBy,
  min_by_key,
  minByKey,
  iter,
  Some,
  None
} from "methods";

describe("min", () => {
  test("basic", () => {
    /*
    let a = [1, 2, 3];
    let b: Vec<u32> = Vec::new ();

    assert_eq!(a.iter().min(), Some(& 3));
    assert_eq!(b.iter().min(), None);
  */
    let a = [1, 2, 3];
    let b = iter();

    expect(iter(a).min()).toEqual(Some(1));
    expect(min(a)).toEqual(Some(1));
    expect(b.min()).toEqual(None);
    expect(min(b)).toEqual(None);
  });

  test("by_key", () => {
    /*
      let a = [-3_i32, 0, 1, 5, -10];
      assert_eq!(*a.iter().min_by_key(|x| x.abs()).unwrap(), -10);
    */
    let a = [-3, 0, 1, 5, -10];
    expect(iter(a).min_by_key(x => Math.abs(x))).toEqual(Some(0));
    expect(iter(a).minByKey(x => Math.abs(x))).toEqual(Some(0));
    expect(min_by_key(a, x => Math.abs(x))).toEqual(Some(0));
    expect(minByKey(a, x => Math.abs(x))).toEqual(Some(0));
  });

  test("by", () => {
    /*
      let a = [-3_i32, 0, 1, 5, -10];
      assert_eq!(*a.iter().min_by(|x, y| x.cmp(y)).unwrap(), 5);
    */
    let a = [-3, 0, 1, 5, -10];
    expect(iter(a).min_by(Math.min)).toEqual(Some(-10));
    expect(iter(a).minBy(Math.min)).toEqual(Some(-10));
    expect(min_by(a, Math.min)).toEqual(Some(-10));
    expect(minBy(a, Math.min)).toEqual(Some(-10));
  });
});

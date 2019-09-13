import {
  max,
  max_by,
  maxBy,
  max_by_key,
  maxByKey,
  iter,
  Some,
  None
} from "methods";

describe("max", () => {
  test("basic", () => {
    /*
    let a = [1, 2, 3];
    let b: Vec<u32> = Vec::new ();

    assert_eq!(a.iter().max(), Some(& 3));
    assert_eq!(b.iter().max(), None);
  */
    let a = [1, 2, 3];
    let b = iter();

    expect(iter(a).max()).toEqual(Some(3));
    expect(max(a)).toEqual(Some(3));
    expect(b.max()).toEqual(None);
    expect(max(b)).toEqual(None);
  });

  test("by_key", () => {
    /*
      let a = [-3_i32, 0, 1, 5, -10];
      assert_eq!(*a.iter().max_by_key(|x| x.abs()).unwrap(), -10);
    */
    let a = [-3, 0, 1, 5, -10];
    expect(iter(a).max_by_key(x => Math.abs(x))).toEqual(Some(-10));
    expect(iter(a).maxByKey(x => Math.abs(x))).toEqual(Some(-10));
    expect(max_by_key(a, x => Math.abs(x))).toEqual(Some(-10));
    expect(maxByKey(a, x => Math.abs(x))).toEqual(Some(-10));
  });

  test("by", () => {
    /*
      let a = [-3_i32, 0, 1, 5, -10];
      assert_eq!(*a.iter().max_by(|x, y| x.cmp(y)).unwrap(), 5);
    */
    let a = [-3, 0, 1, 5, -10];
    expect(iter(a).max_by(Math.max)).toEqual(Some(5));
    expect(iter(a).maxBy(Math.max)).toEqual(Some(5));
    expect(max_by(a, Math.max)).toEqual(Some(5));
    expect(maxBy(a, Math.max)).toEqual(Some(5));
  });
});

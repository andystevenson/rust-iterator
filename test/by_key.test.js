import { by_key, byKey, iter, Some } from "methods";

describe("by_key", () => {
  test("basic", () => {
    /*
      let a = [-3_i32, 0, 1, 5, -10];
      assert_eq!(*a.iter().max_by_key(|x| x.abs()).unwrap(), -10);
    */
    let a = [-3, 0, 1, 5, -10];
    const r = Some(-10);
    expect(by_key(a, Math.abs, Math.max)).toEqual(r);
    expect(byKey(a, Math.abs, Math.max)).toEqual(r);
    let i = iter(a);
    expect(i.by_key(Math.abs, Math.max)).toEqual(r);
    expect(iter(a).byKey(Math.abs, Math.max)).toEqual(r);
  });
});

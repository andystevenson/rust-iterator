import { cloned, iter, None } from "methods";
import { cloned as ecloned } from "eager";

describe("cloned", () => {
  test("basic", () => {
    /*
      let a = [1, 2, 3];
      let v_cloned: Vec<_> = a.iter().cloned().collect();

      // cloned is the same as .map(|&x| x), for integers
      let v_map: Vec<_> = a.iter().map(|&x| x).collect();

      assert_eq!(v_cloned, vec![1, 2, 3]);
      assert_eq!(v_map, vec![1, 2, 3]);
    */
    let a = [1, 2, 3];
    let v_cloned = iter(a)
      .cloned()
      .collect();
    let v_map = iter(a)
      .map()
      .collect();
    expect(v_cloned).toEqual(a);
    expect(v_map).toEqual(v_cloned);
  });

  test("function", () => {
    let a = [1, 2, 3];
    let v_cloned = cloned(a).collect();
    let v_map = iter(a)
      .map()
      .collect();
    expect(v_cloned).toEqual(a);
    expect(v_map).toEqual(v_cloned);
  });

  test("eager", () => {
    let a = [1, 2, 3];
    let v_cloned = ecloned(a);
    let v_map = iter(a)
      .map()
      .collect();
    expect(v_cloned).toEqual(a);
    expect(v_map).toEqual(v_cloned);
  });

  test("empty", () => {
    let iter = cloned();
    expect(iter.next()).toEqual(None);
    iter = cloned([]);
    expect(iter.next()).toEqual(None);
  });
});

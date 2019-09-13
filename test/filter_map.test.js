import { filter_map, into, None } from "methods";

describe("filter_map", () => {
  test("basic", () => {
    /*
      let a = ["1", "lol", "3", "NaN", "5"];
      let mut iter = a.iter().filter_map(|s| s.parse().ok());
      assert_eq!(iter.next(), Some(1));
      assert_eq!(iter.next(), Some(3));
      assert_eq!(iter.next(), Some(5));
      assert_eq!(iter.next(), None);
    */
    let a = ["1", "lol", "3", "NaN", "5"];
    const predicate = n => !isNaN(parseInt(n, 10));
    let iter = filter_map(a, predicate);
    expect(iter.next().value).toBe("1");
    expect(iter.next().value).toBe("3");
    expect(iter.next().value).toBe("5");
    expect(iter.next()).toEqual(None);

    iter = into(a)
      .filter_map(predicate)
      .collect();
    expect(iter).toEqual("135");
    iter = into(a)
      .filterMap(predicate)
      .collect();
    expect(iter).toEqual("135");
  });
});

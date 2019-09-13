import { find_map, into, Some } from "methods";

describe("find_map", () => {
  test("basic", () => {
    /*
      let a = ["lol", "NaN", "2", "5"];

      let first_number = a.iter().find_map(|s| s.parse().ok());

      assert_eq!(first_number, Some(2));
    */
    let a = ["lol", "NaN", "2", "5"];
    const predicate = n => (isNaN(parseInt(n, 10)) ? undefined : n);
    let iter = find_map(a, predicate);
    expect(iter).toEqual(Some("2"));

    iter = into(a).find_map(predicate);
    expect(iter).toEqual(Some("2"));
    iter = into(a).findMap(predicate);
    expect(iter).toEqual(Some("2"));
  });
});

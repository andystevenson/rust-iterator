import { map, into, Some, None } from "methods";

describe("map", () => {
  test("basic", () => {
    /*
        let a = [1, 2, 3];

        let mut iter = a.iter().map(|x| 2 * x);

        assert_eq!(iter.next(), Some(2));
        assert_eq!(iter.next(), Some(4));
        assert_eq!(iter.next(), Some(6));
        assert_eq!(iter.next(), None);
    */
    let a = [1, 2, 3];
    let iter = into(a).map(x => 2 * x);

    expect(iter.next()).toEqual(Some(2));
    expect(iter.next()).toEqual(Some(4));
    expect(iter.next()).toEqual(Some(6));
    expect(iter.next()).toEqual(None);

    iter = map(a, x => 2 * x);
    expect(iter.next()).toEqual(Some(2));
    expect(iter.next()).toEqual(Some(4));
    expect(iter.next()).toEqual(Some(6));
    expect(iter.next()).toEqual(None);
  });
});

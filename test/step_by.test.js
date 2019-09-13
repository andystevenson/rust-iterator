import { step_by, stepBy, iter, Some, None } from "methods";

describe("step_by", () => {
  test("basic", () => {
    /*
      let a = [0, 1, 2, 3, 4, 5];
      let mut iter = a.iter().step_by(2);

      assert_eq!(iter.next(), Some(&0));
      assert_eq!(iter.next(), Some(&2));
      assert_eq!(iter.next(), Some(&4));
      assert_eq!(iter.next(), None);
    */
    let a = [0, 1, 2, 3, 4, 5];
    let i = iter(a).step_by(2);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(2));
    expect(i.next()).toEqual(Some(4));
    expect(i.next()).toEqual(None);

    i = step_by(a, 2);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(2));
    expect(i.next()).toEqual(Some(4));
    expect(i.next()).toEqual(None);

    i = iter(a).stepBy(2);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(2));
    expect(i.next()).toEqual(Some(4));
    expect(i.next()).toEqual(None);

    i = stepBy(a, 2);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(2));
    expect(i.next()).toEqual(Some(4));
    expect(i.next()).toEqual(None);
  });
});

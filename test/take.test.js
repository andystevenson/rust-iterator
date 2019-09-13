import { take, take_while, takeWhile, range, iter, Some, None } from "methods";

describe("take", () => {
  test("basic", () => {
    /*
        let a = [1, 2, 3];

        let mut iter = a.iter().take(2);

        assert_eq!(iter.next(), Some(&1));
        assert_eq!(iter.next(), Some(&2));
        assert_eq!(iter.next(), None);
    */
    let a = [1, 2, 3];

    let i = iter(a).take(2);

    expect(i.next()).toEqual(Some(1));
    expect(i.next()).toEqual(Some(2));
    expect(i.next()).toEqual(None);

    i = take(a, 2);

    expect(i.next()).toEqual(Some(1));
    expect(i.next()).toEqual(Some(2));
    expect(i.next()).toEqual(None);
  });

  test("range", () => {
    /*
      let mut iter = (0..).take(3);

      assert_eq!(iter.next(), Some(0));
      assert_eq!(iter.next(), Some(1));
      assert_eq!(iter.next(), Some(2));
      assert_eq!(iter.next(), None);
    */
    let i = range(0, Infinity).take(3);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(1));
    expect(i.next()).toEqual(Some(2));
    expect(i.next()).toEqual(None);

    i = take(range(0, Infinity), 3);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(1));
    expect(i.next()).toEqual(Some(2));
    expect(i.next()).toEqual(None);
  });

  test("while basic", () => {
    /*
      let a = [-1i32, 0, 1];
      let mut iter = a.iter().take_while(|x| x.is_negative());
      assert_eq!(iter.next(), Some(&-1));
      assert_eq!(iter.next(), None);
    */
    let a = [-1, 0, 1];

    let i = iter(a).take_while(x => x < 0);

    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(None);

    i = take_while(a, x => x < 0);

    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(None);

    i = takeWhile(a, x => x < 0);

    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(None);
  });

  test("after first", () => {
    /*
      let a = [-1, 0, 1, -2];

      let mut iter = a.iter().take_while(|x| **x < 0);

      assert_eq!(iter.next(), Some(&-1));

      // We have more elements that are less than zero, but since we already
      // got a false, take_while() isn't used any more
      assert_eq!(iter.next(), None);
    */
    let a = [-1, 0, 1, -2];

    let i = iter(a).take_while(x => x < 0);

    expect(i.next()).toEqual(Some(-1));

    // We have more elements that are less than zero, but since we already
    // got a false, take_while() isn't used any more
    expect(i.next()).toEqual(None);

    i = take_while(a, x => x < 0);
    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(None);

    i = takeWhile(a, x => x < 0);
    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(None);
  });
});

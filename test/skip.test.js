import { skip, skip_while, skipWhile, iter, Some, None } from "methods";

describe("skip", () => {
  test("basic", () => {
    /*
      let a = [1, 2, 3];

      let mut iter = a.iter().skip(2);

      assert_eq!(iter.next(), Some(&3));
      assert_eq!(iter.next(), None);
    */
    let a = [1, 2, 3];
    let i = iter(a).skip(2);
    expect(i.next()).toEqual(Some(3));
    expect(i.next()).toEqual(None);

    i = skip(a, 2);
    expect(i.next()).toEqual(Some(3));
    expect(i.next()).toEqual(None);

    i = iter(a).skip(-2);
    expect(i.next()).toEqual(Some(1));
    expect(i.next()).toEqual(None);

    i = skip(a, -2);
    expect(i.next()).toEqual(Some(1));
    expect(i.next()).toEqual(None);
  });

  test("while", () => {
    /*
      let a = [-1i32, 0, 1];

      let mut iter = a.iter().skip_while(|x| x.is_negative());

      assert_eq!(iter.next(), Some(&0));
      assert_eq!(iter.next(), Some(&1));
      assert_eq!(iter.next(), None);
    */
    let a = [-1, 0, 1];

    let i = iter(a).skip_while(x => x < 0);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(1));
    expect(i.next()).toEqual(None);

    i = skip_while(a, x => x < 0);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(1));
    expect(i.next()).toEqual(None);

    i = skipWhile(a, x => x < 0);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(1));
    expect(i.next()).toEqual(None);

    i = iter(a).skip_while(x => x > 0, 0, false);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(None);

    i = skip_while(a, x => x > 0, 0, false);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(None);

    i = iter(a).skipWhile(x => x > 0, 0, false);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(None);

    i = skipWhile(a, x => x > 0, 0, false);

    expect(i.next()).toEqual(Some(0));
    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(None);
  });
});

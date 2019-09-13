import { peekable, iter, Some, None } from "methods";

describe("peekable", () => {
  test("basic", () => {
    /*
      let xs = [1, 2, 3];

      let mut iter = xs.iter().peekable();

      // peek() lets us see into the future
      assert_eq!(iter.peek(), Some(&&1));
      assert_eq!(iter.next(), Some(&1));

      assert_eq!(iter.next(), Some(&2));

      // we can peek() multiple times, the iterator won't advance
      assert_eq!(iter.peek(), Some(&&3));
      assert_eq!(iter.peek(), Some(&&3));

      assert_eq!(iter.next(), Some(&3));

      // after the iterator is finished, so is peek()
      assert_eq!(iter.peek(), None);
      assert_eq!(iter.next(), None);
    */
    let xs = [1, 2, 3];

    let i = iter(xs).peekable();

    // peek() lets us see into the future
    expect(i.peek()).toEqual(Some(1));
    expect(i.next()).toEqual(Some(1));

    expect(i.next()).toEqual(Some(2));

    // we can peek() multiple times, the iterator won't advance
    expect(i.peek()).toEqual(Some(3));
    expect(i.peek()).toEqual(Some(3));

    expect(i.next()).toEqual(Some(3));

    // after the iterator is finished, so is peek()
    expect(i.peek()).toEqual(None);
    expect(i.next()).toEqual(None);

    // same again
    i = peekable(xs);

    // peek() lets us see into the future
    expect(i.peek()).toEqual(Some(1));
    expect(i.next()).toEqual(Some(1));

    expect(i.next()).toEqual(Some(2));

    // we can peek() multiple times, the iterator won't advance
    expect(i.peek()).toEqual(Some(3));
    expect(i.peek()).toEqual(Some(3));

    expect(i.next()).toEqual(Some(3));

    // after the iterator is finished, so is peek()
    expect(i.peek()).toEqual(None);
    expect(i.next()).toEqual(None);
  });
});

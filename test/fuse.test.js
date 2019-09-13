import { Some, None } from "methods";
import Iterator from "Iterator";

class Alternate extends Iterator {
  state = 0;

  next() {
    let val = this.state;
    this.state = this.state + 1;

    if (val % 2 === 0) return Some(val);
    return None;
  }
}

describe("fuse", () => {
  test("basic", () => {
    /*
      // an iterator which alternates between Some and None
      struct Alternate {
          state: i32,
      }

      impl Iterator for Alternate {
          type Item = i32;

          fn next(&mut self) -> Option<i32> {
              let val = self.state;
              self.state = self.state + 1;

              // if it's even, Some(i32), else None
              if val % 2 == 0 {
                  Some(val)
              } else {
                  None
              }
          }
      }

      let mut iter = Alternate { state: 0 };

      // we can see our iterator going back and forth
      assert_eq!(iter.next(), Some(0));
      assert_eq!(iter.next(), None);
      assert_eq!(iter.next(), Some(2));
      assert_eq!(iter.next(), None);

      // however, once we fuse it...
      let mut iter = iter.fuse();

      assert_eq!(iter.next(), Some(4));
      assert_eq!(iter.next(), None);

      // it will always return `None` after the first time.
      assert_eq!(iter.next(), None);
      assert_eq!(iter.next(), None);
      assert_eq!(iter.next(), None);
    */
    // an iterator which alternates between Some and None
    let iter = new Alternate();

    expect(iter.next()).toEqual(Some(0));
    expect(iter.next()).toEqual(None);
    expect(iter.next()).toEqual(Some(2));
    expect(iter.next()).toEqual(None);

    // however, once we fuse it...
    iter = iter.fuse();

    expect(iter.next()).toEqual(Some(4));
    expect(iter.next()).toEqual(None);

    // it will always return `None` after the first time.
    expect(iter.next()).toEqual(None);
    expect(iter.next()).toEqual(None);
    expect(iter.next()).toEqual(None);
  });
});

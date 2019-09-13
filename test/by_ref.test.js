import { by_ref, iter, None } from "methods";

describe("by_ref", () => {
  test("example", () => {
    /*
      let a = [1, 2, 3];
      let iter = a.iter();
      let sum: i32 = iter.take(5).fold(0, |acc, i| acc + i );
      assert_eq!(sum, 6);

      // if we try to use iter again, it won't work. The following line
      // gives "error: use of moved value: `iter`
      // assert_eq!(iter.next(), None);
    */
    let a = [1, 2, 3];
    let i = iter(a);
    let sum = i.take(5).fold(0, (acc, i) => acc + i);
    expect(sum).toBe(6);
    expect(i.next()).toEqual(None);
  });

  test("try again", () => {
    /*
      // let's try that again
      let a = [1, 2, 3];
      let mut iter = a.iter();

      // instead, we add in a .by_ref()
      let sum: i32 = iter.by_ref().take(2).fold(0, |acc, i| acc + i );
      assert_eq!(sum, 3);

      // now this is just fine:
      assert_eq!(iter.next(), Some(&3));
      assert_eq!(iter.next(), None);
    */
    let a = [1, 2, 3];
    let i = iter(a);
    let sum = i
      .by_ref()
      .take(2)
      .fold(0, (acc, i) => acc + i);
    expect(sum).toBe(3);
    expect(i.next().value).toBe(3);
    expect(i.next()).toEqual(None);
  });

  test("try again function", () => {
    let a = [1, 2, 3];
    let sum = by_ref(a)
      .take(2)
      .fold(0, (acc, i) => acc + i);
    expect(sum).toBe(3);
  });
});

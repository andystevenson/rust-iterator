import { collect, rcollect, iter } from "methods";

const identity = undefined; // will take the default
const square = v => v ** 2;

describe("collect", () => {
  test.each([
    [undefined, identity, []],
    ["abc", identity, "abc"],
    [[1, 2, 3], identity, [1, 2, 3]],
    [[1, 2, 3], square, [1, 4, 9]]
  ])(`basic %#`, (iterable, closure, expected) => {
    expect(collect(iterable, closure)).toEqual(expected);
    expect(iter(iterable).collect(closure)).toEqual(expected);
  });

  test.each([
    [undefined, identity, []],
    ["abc", identity, "cba"],
    [[1, 2, 3], identity, [3, 2, 1]],
    [[1, 2, 3], square, [9, 4, 1]]
  ])(`basic %#`, (iterable, closure, expected) => {
    expect(rcollect(iterable, closure)).toEqual(expected);
    expect(iter(iterable).rcollect(closure)).toEqual(expected);
  });

  test("with-map", () => {
    /*
      let a = [1, 2, 3];
      let doubled: Vec<i32> = a.iter()
                               .map(|&x| x * 2)
                               .collect();

      assert_eq!(vec![2, 4, 6], doubled);
    */
    let a = [1, 2, 3];
    let doubled = iter(a)
      .map(x => x * 2)
      .collect();
    expect(doubled).toEqual([2, 4, 6]);

    let delbuod = iter(a)
      .map(x => x * 2)
      .rcollect();
    expect(delbuod).toEqual([6, 4, 2]);
    /*
      let chars = ['g', 'd', 'k', 'k', 'n'];

      let hello: String = chars
                            .iter()
                            .map(|&x| x as u8)
                            .map(|x| (x + 1) as char)
                            .collect();

      assert_eq!("hello", hello);
     */
    let chars = ["g", "d", "k", "k", "n"];

    const next = x => String.fromCharCode(x.charCodeAt(0) + 1);

    let hello = iter(chars)
      .map(x => x)
      .map(x => next(x))
      .collect();
    expect(hello).toEqual("hello");

    let olleh = iter(chars)
      .map(x => x)
      .map(x => next(x))
      .rcollect();
    expect(olleh).toEqual("olleh");
  });

  test("for Error", () => {
    const a = [1, 2, 3, 4];
    const result = iter(a)
      .map(x => {
        if (x > 3) throw "3's enough!";
        else return x;
      })
      .collect();
    expect(result).toEqual(Error("3's enough!"));
  });
});

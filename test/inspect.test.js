import { inspect, iter } from "methods";

describe("inspect", () => {
  test("basic", () => {
    /*
      let a = [1, 4, 2, 3];

      // this iterator sequence is complex.
      let sum = a.iter()
          .cloned()
          .filter(|x| x % 2 == 0)
          .fold(0, |sum, i| sum + i);

      println!("{}", sum);

      // let's add some inspect() calls to investigate what's happening
      let sum = a.iter()
          .cloned()
          .inspect(|x| println!("about to filter: {}", x))
          .filter(|x| x % 2 == 0)
          .inspect(|x| println!("made it through filter: {}", x))
          .fold(0, |sum, i| sum + i);

      println!("{}", sum);
    */
    let a = [1, 4, 2, 3];
    // this iterator sequence is complex.
    let result = [];
    let sum = iter(a)
      .cloned()
      .filter(x => x % 2 == 0)
      .fold(0, (sum, i) => sum + i);

    result.push(sum);

    // let's add some inspect() calls to investigate what's happening
    sum = iter(a)
      .cloned()
      .inspect(x => result.push(`about to filter: ${x}`))
      .filter(x => x % 2 == 0)
      .inspect(x => result.push(`made it through filter: ${x}`))
      .fold(0, (sum, i) => sum + i);

    result.push(sum);
    /*
        6
        about to filter: 1
        about to filter: 4
        made it through filter: 4
        about to filter: 2
        made it through filter: 2
        about to filter: 3
        6
      */
    const expected = [
      6,
      "about to filter: 1",
      "about to filter: 4",
      "made it through filter: 4",
      "about to filter: 2",
      "made it through filter: 2",
      "about to filter: 3",
      6
    ];
    expect(result).toEqual(expected);
  });
});

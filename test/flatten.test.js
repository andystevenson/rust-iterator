import { flatten, into, iter } from "methods";

describe("flatten", () => {
  test("basic", () => {
    /*
      let data = vec![vec![1, 2, 3, 4], vec![5, 6]];
      let flattened = data.into_iter().flatten().collect::<Vec<u8>>();
      assert_eq!(flattened, &[1, 2, 3, 4, 5, 6]);
    */
    let data = [[1, 2, 3, 4], [5, 6]];
    const expected = [1, 2, 3, 4, 5, 6];
    let flattened = flatten(data).collect();
    expect(flattened).toEqual(expected);
    flattened = into(data)
      .flatten()
      .collect();
    expect(flattened).toEqual(expected);
  });

  test("map", () => {
    /*
        let words = ["alpha", "beta", "gamma"];

        // chars() returns an iterator
        let merged: String = words.iter()
                                  .map(|s| s.chars())
                                  .flatten()
                                  .collect();
        assert_eq!(merged, "alphabetagamma");
    */
    let words = ["alpha", "beta", "gamma"];
    const expected = words.join("");

    const closure = s => s.split("");
    let merged = iter(words)
      .map(closure)
      .flatten()
      .collect();
    expect(merged).toBe(expected);
  });

  test("not deep", () => {
    /*
        let d3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

        let d2 = d3.iter().flatten().collect::<Vec<_>>();
        assert_eq!(d2, [&[1, 2], &[3, 4], &[5, 6], &[7, 8]]);

        let d1 = d3.iter().flatten().flatten().collect::<Vec<_>>();
        assert_eq!(d1, [&1, &2, &3, &4, &5, &6, &7, &8]);
    */
    let d3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

    let d2 = iter(d3)
      .flatten()
      .collect();
    expect(d2).toEqual([[1, 2], [3, 4], [5, 6], [7, 8]]);

    let d1 = iter(d3)
      .flatten()
      .flatten()
      .collect();
    expect(d1).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

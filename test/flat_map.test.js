import { flat_map, into } from "methods";

describe("flat_map", () => {
  test("basic", () => {
    /*
      let words = ["alpha", "beta", "gamma"];
      // chars() returns an iterator
      let merged: String = words.iter()
                                .flat_map(|s| s.chars())
                                .collect();
      assert_eq!(merged, "alphabetagamma");
    */
    let words = ["alpha", "beta", "gamma"];
    const expected = words.join(""); // alphabetagamma
    const closure = word => [...word];
    let merged = flat_map(words, word => [...word]).collect();
    expect(merged).toEqual(expected);

    let iter = into(words);
    merged = iter.flat_map(closure).collect();
    expect(merged).toEqual(expected);

    iter = into(words);
    merged = iter.flatMap(closure).collect();
    expect(merged).toEqual(expected);
  });
});

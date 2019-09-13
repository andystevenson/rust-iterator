import { for_each, range, iter } from "methods";

function channel() {
  const ch = {
    rx: [],
    tx: {
      send(v) {
        ch.rx.push(v);
      }
    }
  };
  return ch;
}

describe("for_each", () => {
  test("basic", () => {
    /*
      let (tx, rx) = channel();
      (0..5).map(|x| x * 2 + 1)
            .for_each(move |x| tx.send(x).unwrap());

      let v: Vec<_> =  rx.iter().collect();
      assert_eq!(v, vec![1, 3, 5, 7, 9]);
    */
    let { tx, rx } = channel();
    range(0, 5)
      .map(x => x * 2 + 1)
      .for_each(x => tx.send(x));

    let v = iter(rx).collect();
    expect(v).toEqual([1, 3, 5, 7, 9]);
    rx = [];
    for_each(range(0, 5), x => rx.push(x * 2 + 1));
    expect(rx).toEqual([1, 3, 5, 7, 9]);
  });
  test("longer", () => {
    /*
      (0..5).flat_map(| x | x * 100..x * 110)
      .enumerate()
      .filter(|& (i, x) | (i + x) % 3 == 0)
      .for_each(| (i, x) | println!("{}:{}", i, x));
    */
    const result = [];
    range(0, 5)
      .flat_map(x => range(x * 100, x * 110))
      .enumerate()
      .filter(([i, x]) => (i + x) % 3 == 0)
      .for_each(([i, x]) => result.push(`${i}:${x}`));
    // console.log(result.join("\n"));
    // console.log(result);
    const expected = [
      "1:101",
      "4:104",
      "7:107",
      "10:200",
      "13:203",
      "16:206",
      "19:209",
      "22:212",
      "25:215",
      "28:218",
      "30:300",
      "33:303",
      "36:306",
      "39:309",
      "42:312",
      "45:315",
      "48:318",
      "51:321",
      "54:324",
      "57:327",
      "61:401",
      "64:404",
      "67:407",
      "70:410",
      "73:413",
      "76:416",
      "79:419",
      "82:422",
      "85:425",
      "88:428",
      "91:431",
      "94:434",
      "97:437"
    ];
    expect(result).toEqual(expected);
  });
});

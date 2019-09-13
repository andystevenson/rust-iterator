import { try_fold, tryFold, iter } from "methods";

describe("try_fold", () => {
  test("basic", () => {
    /*
        let a = [1, 2, 3];

        // the checked sum of all of the elements of the array
        let sum = a.iter().try_fold(0i8, |acc, &x| acc.checked_add(x));

        assert_eq!(sum, Some(6));
    */
    let a = [1, 2, 3];

    // the checked sum of all of the elements of the array
    let sum = iter(a).try_fold(0, (acc, x) => acc + x);
    expect(sum.ok).toEqual(6);
    sum = try_fold(a, 0, (acc, x) => acc + x);
    expect(sum.ok).toEqual(6);
    sum = tryFold(a, 0, (acc, x) => acc + x);
    expect(sum.ok).toEqual(6);
  });
});

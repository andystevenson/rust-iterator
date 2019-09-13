import { scan, iter, Some, None } from "methods";

describe("scan", () => {
  test("basic", () => {
    /*
        let a = [1, 2, 3];

        let mut iter = a.iter().scan(1, |state, &x| {
            // each iteration, we'll multiply the state by the element
            *state = *state * x;

            // then, we'll yield the negation of the state
            Some(-*state)
        });

        assert_eq!(iter.next(), Some(-1));
        assert_eq!(iter.next(), Some(-2));
        assert_eq!(iter.next(), Some(-6));
        assert_eq!(iter.next(), None);
    */
    let a = [1, 2, 3];
    // each iteration, we'll multiply the state by the element
    // then, we'll yield the negation of the state
    let i = iter(a).scan(1, (state, x) => {
      state.value = state.value * x;
      return Some(-state.value);
    });

    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(Some(-2));
    expect(i.next()).toEqual(Some(-6));
    expect(i.next()).toEqual(None);

    i = scan(a, 1, (state, x) => {
      state.value = state.value * x;
      return Some(-state.value);
    });

    expect(i.next()).toEqual(Some(-1));
    expect(i.next()).toEqual(Some(-2));
    expect(i.next()).toEqual(Some(-6));
    expect(i.next()).toEqual(None);
  });
});

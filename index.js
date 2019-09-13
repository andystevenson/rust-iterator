const $ = console.log;
$("hello world");

function factorial(n = 1) {
  let result = 1;
  for (let i = 1; i < n; i++) {
    result *= i;
  }
  return result;
}

// // import ElementIterator from "./ElementIterator";
// // import Element from "./Element";
import * as lib from "./src/methods";

// let dei;
// // dei = lib.iter([1, 2, 3]);
// // $(dei.next());
// // $(dei.next());
// // $(dei.next());
// // $(dei.next());
// // $(dei.next());
// // dei = lib.iter([1, 2, 3]);
// // $(dei.next_back());
// // $(dei.next_back());
// // $(dei.next_back());
// // $(dei.next_back());
// // $(dei.next_back());
// dei = lib.iter([1, 2, 3]);
// $(lib.rposition(dei, v => v === 2));
// // let head = new Element("head");
// // let tail = head;
// // tail.next = new Element("middle");
// // tail = tail.next;
// // tail.next = new Element("tail");
// // tail = tail.next;
// // let iter1 = new ElementIterator(head);
// // head = new Element(1);
// // head.next = new Element(2);
// // head.next.next = new Element(3);
// // let iter2 = new ElementIterator(head);

// // $(lib.collect("abcd"));
// // $(lib.collect(["abcd"]));
// // $(lib.collect([1, 2, 3]));
// // $(lib.count(iter1));
// // $(lib.count([4, 5, 6, 7]));
// // $(lib.all(iter1.reset(), item => ($(item.value), true)));
// // $(lib.all(["one", "two", "three"], item => ($(item), true)));
// // iter1.reset();
// // const predicate = e => e.value === "tail" || ($(e.value), false);
// // $(lib.any(iter1, predicate));
// // $(
// //   lib.any(
// //     [{ value: "head" }, { value: "middle" }, { value: "tail" }],
// //     predicate
// //   )
// // );
// // $(lib.last(iter1.reset()));
// // $(lib.nth(iter1.reset(), 1));
// // $(...lib.step_by(iter1.reset(), 1));
// // $(...lib.step_by(iter1.reset(), 2));
// // $(...lib.chain(iter1.reset(), iter2));
// // $(...lib.copied([1, 2, 3]));
// // $(...lib.cloned([1, 2, 3]));
// // let cycle = lib.cycle([1, 2, 3]);
// // for (let i = 0; i < 10; i++) $(cycle.next().value);
// // $(lib.product([1, 2, 3]));
// // $(lib.cmp([1, 2, 3], [1, 2, 3]));
// // $(lib.cmp([1, 2, 3], [1, 3, 2]));
// // $(lib.cmp(["a", "b", "c"], ["a", "b", "c"]));
// // $(lib.cmp(["a", "b", "c"], ["a", "c", "b"]));
// // $(lib.cmp("abc", "abc"));
// // $(lib.cmp("acc", "abc"));
// // $(lib.lt([1, 2, 3], [1, 2, 3]), lib.le([1, 2, 3], [1, 2, 3]));
// // $(lib.lt([1, 2, 3], [1, 3, 2]), lib.le([1, 2, 3], [1, 3, 2]));
// // $(
// //   lib.lt(["a", "b", "c"], ["a", "b", "c"]),
// //   lib.le(["a", "b", "c"], ["a", "b", "c"])
// // );
// // $(
// //   lib.lt(["a", "b", "c"], ["a", "c", "b"]),
// //   lib.le(["a", "b", "c"], ["a", "c", "b"])
// // );
// // $(lib.lt("abc", "abc"), lib.le("abc", "abc"));
// // $(lib.lt("acc", "abc"), lib.le("acc", "abc"));
// // $(lib.lt("abc", "abcd"), lib.le("abc", "abcd"));
// $(lib.is_sorted([]));
// // $(lib.is_sorted([1]));
// // $(lib.is_sorted([1, 2, 3, 4]));
// // $(lib.is_sorted([-1, 1, 2, 3, 4]));
// // $(lib.is_sorted([-1, -2, 2, 3, 4]));
let z = [[1, 2, 3], [4, 5, 6]];
$(z);
let rz = [...lib.zip(...z)];
$({ rz });
let urz = lib.unzip(...rz);
$({ urz });
z = [[1, 2, 3], [4, 5, 6], [8, 9, 10, 11]];
$(z);
rz = [...lib.zip(...z)];
$({ rz });
urz = lib.unzip(...rz);
$({ urz });
$("zip", ...lib.zip([1, 2, 3], [4, 5, 6]));
$("zip", ...lib.zip([1, 2, 3, 4], [4, 5, 6]));
$("zip", ...lib.zip([1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]));
$("zip", ...lib.zip([], [4, 5, 6, 7]));
// // $(...lib.map([1, 2, 3], x => x * 2));
// // lib.for_each(lib.map([1, 2, 3], x => x * 2), x => $(x / 2));
// // $(...lib.filter([1, 2, 3], x => x % 2 === 1));
// // $(...lib.filter_map([1, 2, 3], x => (x % 2 === 1 ? x : undefined)));
// // $(...lib.enumerate([1, 2, 3]));
// // let xs = [1, 2, 3];

// // iter1 = lib.peekable(xs);

// // // peek() lets us see into the future
// // $(iter1.peek().value == 1);
// // $(iter1.next().value == 1);
// // $(iter1.next().value == 2);
// // $(iter1.peek().value == 3);
// // $(iter1.peek().value == 3);
// // $(iter1.peek().value == 3);

// // // we can peek() multiple times, the iterator won't advance
// // $(iter1.next().value == 3);

// // $(iter1.peek() === iter1.next());
// // // after the iterator is finished, so is peek()
// // let a = [-2, -1, 0, 1, -3];

// // $(...lib.skip_while(a, a => a < 0));
// // $(...lib.take_while(a, a => a < 0));
// // $(...lib.skip(a, 2));
// // $(...lib.take(a, 2));
// // $(
// //   ...lib.scan(
// //     [1, 2, 3],
// //     { value: 1 },
// //     (state, value) => ((state.value = state.value * value), -state.value)
// //   )
// // );
// // $(...lib.flatten([1, 2, [3, 4], 5, [6, 7, 8, []], []]));
// // let words = ["alpha", "beta", "gamma"];

// // // chars() returns an iterator
// // let merged = [...lib.flat_map(words, word => [...word])];
// // $(merged.join(""));

// // $(...lib.fuse([1, 2, 3, undefined, 4, 5]));
// // $(...lib.inspect([1, 2, 3, undefined, 4, 5], x => $(`==${x}==`)));
// // $(...lib.partition([1, 2, 3, 4, 5, 6, 7], x => x < 4));
// // $(lib.fold([1, 2, 3], 0, (acc, v) => acc + v));
// // $(lib.find([1, 2, 3], v => v === 2));
// // $(lib.find_map([undefined, undefined, 1, 2, 3], v => v));
// // $(lib.position([undefined, undefined, 1, 2, 3], v => v === 2));
// // $(lib.max([1, 2, 3]));
// // $(lib.min([1, 2, 3]));
// // a = [-3, 0, 1, 5, -10, -10, -9];
// // $("max_by", lib.max_by(a, (a, b) => (a > b ? a : b)));
// // $("min_by", lib.min_by(a, (a, b) => (a < b ? a : b)));
// // $(lib.max_by_key(a, Math.abs));
// // $(lib.min_by_key(a, Math.abs));
// // $(lib.sum([1, 2, 3]));
// // $(lib.sum([1, 2, 3], (a, b) => a + b ** 2));
// // $(...lib.riter([1, 2, 3]));
// // $(...lib.rev([1, 2, 3]));
// // // import IteratorType, { Direction } from "./IteratorType";
// // // import LinkedList from "./List";
// // // import util from "util";
// // // import ListType, { Element, Iterator, Keys, Entries } from "./ListType";
// // // import List from "./List";

// // // class F {
// // //   get a() {
// // //     return Reflect.getPrototypeOf(this).constructor.name;
// // //   }
// // // }
// // // $(Reflect.getPrototypeOf(F));
// // // //$(Object.getOwnPropertyNames(Reflect.getPrototypeOf(F)));
// // // $(Reflect.getOwnPropertyDescriptor(F, "a"));
// // // let f = new F();
// // // $(f.a);
// // // $(Reflect.getPrototypeOf(f));
// // // $(Object.getOwnPropertyNames(Reflect.getPrototypeOf(f)));
// // // $(Reflect.getOwnPropertyDescriptor(Reflect.getPrototypeOf(f), "a"));

// // // class G extends F {
// // //   get a() {
// // //     return Reflect.getPrototypeOf(this).constructor.name;
// // //   }
// // // }
// // // $(Reflect.getPrototypeOf(G));
// // // $(Object.getOwnPropertyNames(Reflect.getPrototypeOf(G)));
// // // $(Reflect.getOwnPropertyDescriptor(G, "a"));
// // // let g = new G();
// // // $(g.a);
// // // $(Reflect.getPrototypeOf(g));
// // // $(Object.getOwnPropertyNames(Reflect.getPrototypeOf(g)));
// // // $(Reflect.getOwnPropertyDescriptor(Reflect.getPrototypeOf(g), "a"));

// // // // class H extends G {}
// // // // let g = new G();
// // // // $(g.a);
// // // // let h = new H();
// // // // $(h.a);
// // // // Object.defineProperty(H, "a", {
// // // //   get() {
// // // //     return "foo";
// // // //   }
// // // // });
// // // // $(h.a);
// // // class IElement extends Element {}
// // // class IIterator extends Iterator {}
// // // class RIterator extends Iterator {}
// // // class IKeys extends Keys {}
// // // class IEntries extends Entries {}

// // // class XYZ {
// // //   #e;
// // // }
// // // let xyz = new XYZ();
// // // $(xyz);
// // // $(Reflect.getOwnPropertyDescriptor(xyz, "#e"));
// // // // let A = ListType();
// // // // let B = ListType();
// // // // $(A.name);
// // // // $(B.name);
// // // // $(A === B);

// // // // let AA = ListType(true);
// // // // let BB = ListType(true);
// // // // $(AA.name);
// // // // $(BB.name);
// // // // $(AA === BB);

// // // // let C = ListType(true, true, IElement, IIterator, RIterator, IEntries, IKeys);
// // // // let D = ListType(true, true, IElement, IIterator, RIterator, IEntries, IKeys);
// // // // $(C.name);
// // // // $(D.name);
// // // // $(C === D);

// // // // $(C.constructor);
// // // // $(C.constructor.name);
// // // // $(Object.getOwnPropertyNames(Reflect.getPrototypeOf(C)));
// // // // $(Reflect.getOwnPropertyDescriptor(Reflect.getPrototypeOf(C), "circular"));
// // // // let c = new C();
// // // // $(Object.getOwnPropertyNames(Reflect.getPrototypeOf(c)));
// // // // $(Reflect.getOwnPropertyDescriptor(Reflect.getPrototypeOf(c), "circular"));
// // // // $(Reflect.has(c, "circular"));
// // // // $(c.circular);
// // // // $(c.double);
// // // // let l = new LinkedList(1, 2, 3);
// // // // let e = new c.ElementType(2, l.head, l.tail);
// // // // $(e);
// // // // $(e.next, e.prev);
// // // // $(new c.IteratorType(l));
// // // // $(new c.ReverseIteratorType(l));
// // // // $(new c.KeysType(l));
// // // // $(new c.EntriesType(l));
// // // // // const obj = {
// // // // //   a: 1,
// // // // //   b: "3",
// // // // //   c: {
// // // // //     d: "cccc",
// // // // //     e: 123,
// // // // //     f: { g: "ggggg", h: "hhhhhhhhhhhhh", i: "i".repeat(100) }
// // // // //   }
// // // // // };

// // // // // const obj2 = {
// // // // //   a: 1,
// // // // //   b: "3",
// // // // //   c: {
// // // // //     d: "dddd"
// // // // //   }
// // // // // };

// // // // // //$(util.inspect(obj));
// // // // // let ll = new LinkedList(1, 2, 3, { obj2 });
// // // // // let l = new LinkedList(
// // // // //   ll,
// // // // //   Symbol("foo"),
// // // // //   { obj3: { ...obj2 } },
// // // // //   1,
// // // // //   ll,
// // // // //   ["foo", "bar", "baz"],
// // // // //   "foo",
// // // // //   2.1,
// // // // //   { obj2 },
// // // // //   "99.99",
// // // // //   null,
// // // // //   undefined,
// // // // //   {
// // // // //     obj: { ...obj2 }
// // // // //   }
// // // // // );
// // // // // // $(util.inspect(l));
// // // // // let ri = ll.reverseIterator();
// // // // // $(ri.next().value);
// // // // // $(ri.next().value);
// // // // // $(ri.next().value);
// // // // // $(ri.next().value);
// // // // // $(ri.next().value);
// // // // // $(ri.next().value);
// // // // // ri = ll.reverseIterator(2);
// // // // // $([...ri]);
// // // // // ri = ll.iterator(2);
// // // // // $([...ri]);
// // // // // ll = new LinkedList();
// // // // // ri = ll.iterator();
// // // // // $([...ri]);
// // // // // ll = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// // // // // ri = ll.iterator(2);
// // // // // $([...ri]);
// // // // // ri = ll.iterator(2, ll.head);
// // // // // $([...ri]);
// // // // // ll = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8, 9);
// // // // // ri = ll.iterator(2);
// // // // // $([...ri]);
// // // // // ri = ll.iterator(2, ll.head);
// // // // // $([...ri]);
// // // // // ll = new LinkedList("1");
// // // // // ri = ll.iterator(2);
// // // // // $([...ri]);
// // // // // ri = ll.iterator(2, ll.head);
// // // // // $([...ri]);

// // // // // // reverse iterators
// // // // // ll = new LinkedList();
// // // // // ri = ll.reverseIterator();
// // // // // $([...ri]);
// // // // // ll = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// // // // // ri = ll.reverseIterator(2);
// // // // // $([...ri]);
// // // // // ri = ll.reverseIterator(2, ll.head);
// // // // // $([...ri]);
// // // // // ri = ll.reverseIterator(2, ll.tail);
// // // // // $([...ri]);
// // // // // ll = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8, 9);
// // // // // ri = ll.reverseIterator(2);
// // // // // $([...ri]);
// // // // // ri = ll.reverseIterator(2, ll.tail);
// // // // // $([...ri]);
// // // // // ll = new LinkedList("1");
// // // // // ri = ll.reverseIterator();
// // // // // $([...ri]);
// // // // // ri = ll.reverseIterator(2);
// // // // // $([...ri]);
// // // // // ri = ll.reverseIterator(2, ll.tail);
// // // // // $([...ri]);

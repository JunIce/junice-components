---
layout: doc
---
# type-challenages


## 00002-medium-return-type

Get Return Type

```typescript
type MyReturnType<T> = T extends (...args: any) => infer V ? V : T
```

## 00003-medium-omit

Implement the built-in `Omit<T, K>` generic without using it.

Constructs a type by picking all properties from `T` and then removing `K`

```typescript
type MyExclude1<T, K> = T extends K ? never : T

type MyOmit<T, K> = {
  [x in MyExclude1<keyof T, K>]: T[x]
}
```

## 00004-easy-pick

Implement the built-in `Pick<T, K>` generic without using it.

Constructs a type by picking the set of properties `K` from `T`

```typescript
type MyInclude1<T, K> = T extends K ? T : never
type MyPick<T, K extends keyof T> = {
  [x in MyInclude1<keyof T, K>]: T[x]
}
```

## 00005-extreme-readonly-keys

Implement a generic `GetReadonlyKeys<T>` that returns a union of the readonly keys of an Object.

```typescript
type SelfEqual<T, R> = (<J>(J: J) => J extends T ? 1 : 2) extends (<J>(J: J) => J extends R ? 1 : 2) ? true : false

type GetReadonlyKeys<T extends Record<string, any>> = keyof {
  [K in keyof T as (SelfEqual<{
    [P in K]: T[P]
  }, {
    readonly [P in K]: T[P]
  }> extends true ? K : never)]: T[K]
}
```

## 00006-hard-simple-vue

In this challenge, we assume that SimpleVue take an Object with `data`, `computed` and `methods` fields as it's only argument,

- `data` is a simple function that returns an object that exposes the context `this`, but you won't be accessible to other computed values or methods.

- `computed` is an Object of functions that take the context as `this`, doing some calculation and returns the result. The computed results should be exposed to the context as the plain return values instead of functions.

- `methods` is an Object of functions that take the context as `this` as well. Methods can access the fields exposed by `data`, `computed` as well as other `methods`. The different between `computed` is that `methods` exposed as functions as-is.

The type of `SimpleVue`'s return value can be arbitrary.

```typescript
type GetComputedProperty<C> = C extends Record<string, (args: unknown[]) => unknown> ? {
  [K in keyof C]: ReturnType<C[K]>
} : never

declare function SimpleVue<D, C extends Record<string, unknown>, M>(options: {
  data: (this: {}) => D
  computed: C & ThisType<D & GetComputedProperty<C> & M>
  methods: M & ThisType<D & GetComputedProperty<C> & M>
}): any
```

## 00007-easy-readonly

```typescript
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
```

## 00008-medium-readonly-2

Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.

`K` specify the set of properties of `T` that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

```typescript
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & { readonly [Key in K]: T[Key] }
```

## 00009-medium-deep-readonly

Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

```typescript
type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends never | (() => any) ? T[k] : DeepReadonly<T[k]>
}

```

## 00010-medium-tuple-to-union

```ts
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```

```typescript
type TupleToUnion<T> = T extends Array<infer V> ? V : never
```

## 00011-easy-tuple-to-object


For example:

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

```ts
type TupleToObject<T extends readonly any[]> = {
  [k in T[number]]: k
}
```


## 00012-medium-chainable-options

For example

```ts
declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
```

```ts
type Chainable<T extends {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<Omit<T, K> & { [k in K]: V }>
  get(): T
}
```


## 00013-warm-hello-world

```ts
type HelloWorld = string // expected to be a string
```

## 00014-easy-first

For example:

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```

```ts
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never
```

## 00015-medium-last


For example

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
```

```ts
type Last<T extends any[]> = T extends [infer F, ...infer Rest] ? Rest extends [] ? F : Last<Rest> : never
```

## 00016-medium-pop


Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.

For example

```ts
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
```


```ts
type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? Rest : []
```



## 00017-hard-currying-1


```ts
const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)
```

The function passed to `Currying` may have multiple arguments, you need to correctly type it.

```ts
type Curry<P, R> = P extends [infer H, ...infer T] ? (p: H) => Curry<T, R> : R

declare function Currying<T extends Function>(fn: T): T extends (...args: infer Arg) => infer Return
  ? Arg extends never[]
    ? () => Return
    : Curry<Arg, Return>
  : never

```


## 00018-easy-tuple-length

For given a tuple, you need create a generic `Length`, pick the length of the tuple

For example:

```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

```ts
type Length<T> = T extends readonly unknown[] ? T['length'] : never
```

## 00020-medium-promise-all

Type the function `PromiseAll` that accepts an array of PromiseLike objects, the returning value should be `Promise<T>` where `T` is the resolved result array.

```ts
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)
```

```ts
// 手写Awaited<T>
type MyAwaited1<T> =
  T extends null | undefined
    ? T
    : T extends object & { then: (fulfilled: infer U) => any }
      ? U extends (value: infer F, ...args: any) => any
        ? F
        : never
      : T

declare function PromiseAll<T extends readonly unknown[] | []>(values: T): Promise<{
  -readonly [K in keyof T]: MyAwaited1<T[K]>
}>
```

## 00043-easy-exclude

Implement the built-in `Exclude<T, U>`

> Exclude from `T` those types that are assignable to `U`

For example:

```ts
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

```ts
type MyExclude<T, U> = T extends U ? never : T
```


## 00055-hard-union-to-intersection

Implement the advanced util type `UnionToIntersection<U>`

For example

```ts
type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
```


```ts
// 触发分派 > 函数参数交叉
type UnionToIntersection<U> = (U extends U ? (args: U) => never : never) extends (args: infer V) => never ? V : never
```


## 00057-hard-get-required

Implement the advanced util type `GetRequired<T>`, which remains all the required fields

For example

```ts
type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
```


```ts
type GetRequired<T> = {
  [K in keyof T as T[K] extends { [K in keyof T]-?: T[K] }[K] ? K : never ]: T[K]
}
```


## 00057-hard-get-required

Implement the advanced util type `GetOptional<T>`, which remains all the optional fields

For example

```ts
type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
```


```ts
type GetOptional<T> = {
  [K in keyof T as T[K] extends { [K in keyof T]-?: T[K] }[K] ? never : K ]: T[K]
}
```

## 00062-medium-type-lookup

Sometimes, you may want to look up a type in a union by its attributes.

In this challenge, we would like to get the corresponding type by searching for the common `type` field in the union `Cat | Dog`. In other words, we will expect to get `Dog` for `LookUp<Dog | Cat, 'dog'>` and `Cat` for `LookUp<Dog | Cat, 'cat'>` in the following example.

```ts
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
```

```ts
type LookUp<U, T> = U extends { type: T } ? U : never
```

## 00089-hard-required-keys

Implement the advanced util type `RequiredKeys<T>`, which picks all the required keys into a union.

For example

```ts
type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”
```

```ts
type RequiredKeys<T> = keyof {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}
```

## 00090-hard-optional-keys

Implement the advanced util type `OptionalKeys<T>`, which picks all the optional keys into a union.

```ts
type OptionalKeys<T> = keyof {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: never
}
```



## 00106-medium-trimleft

````ts
Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.

For example

```ts
type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
```
````



```ts
type WhiteSpace = ' ' | '\t' | '\n'
type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer Rest}` ? TrimLeft<Rest> : S
```



## 00108-medium-trim

Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.



For example

```ts
type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
```



```ts
type WhiteSpace = ' ' | '\t' | '\n'
type Trim<S extends string> = S extends `${WhiteSpace}${infer T}` | `${infer T}${WhiteSpace}` ? Trim<T> : S
```



## 00110-medium-capitalize

Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.



For example

```ts
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
```



```ts
type MyCapitalize<S extends string> = S extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : S
```



## 00112-hard-capitalizewords



Implement `CapitalizeWords<T>` which converts the first letter of ***\*each word of a string\**** to uppercase and leaves the rest as-is.



For example

```ts
type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
```



```ts
type CapitalizeWords<
  S extends string,
  W extends string = '',
> = S extends `${infer A}${infer B}`
  ? Uppercase<A> extends Lowercase<A>
    ? `${Capitalize<`${W}${A}`>}${CapitalizeWords<B>}`
    : CapitalizeWords<B, `${W}${A}`>
  : Capitalize<W>
```



## 00114-hard-camelcase

Implement `CamelCase<T>` which converts `snake_case` string to `camelCase`.



For example



```ts
type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'

type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one
```



```ts
type CamelCase<S extends string> = S extends Lowercase<S> ?
  S extends `${infer F}_${infer RF}${infer R}`
    ? RF extends Uppercase<RF>
      ? `${F}_${CamelCase<`${RF}${R}`>}`
      : `${F}${Uppercase<RF>}${CamelCase<R>}`
    : S
  : CamelCase<Lowercase<S>>
```



## 00116-medium-replace



Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`



For example



```ts
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
```



```ts
type Replace<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer L}${From}${infer A}` ? `${L}${To}${A}` : S
```





## 00119-medium-replaceall

Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`



For example



```ts
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
```



```ts
type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends '' ? S
    : S extends `${infer A}${From}${infer B}` ? `${A}${To}${ReplaceAll<B, From, To>}` : S
```



## 00147-hard-c-printf-parser




There is a function in C language: `printf`. This function allows us to print something with formatting. Like this:

```c
printf("The result is %d.", 42);
```

This challenge requires you to parse the input string and extract the format placeholders like `%d` and `%f`. For example, if the input string is `"The result is %d."`, the parsed result is a tuple `['dec']`.

Here is the mapping:

```typescript
type ControlsMap = {
  c: 'char',
  s: 'string',
  d: 'dec',
  o: 'oct',
  h: 'hex',
  f: 'float',
  p: 'pointer',
}
```



```ts
type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}
type ParsePrintFormat<PrintFS, Res extends string[] = []> =
  PrintFS extends `%${infer F extends keyof ControlsMap}${infer R}`
    ? ParsePrintFormat<R, [...Res, ControlsMap[F]]>
    : PrintFS extends `%%${infer R}`
      ? ParsePrintFormat<R, Res>
      : PrintFS extends `${string}${infer R}`
        ? ParsePrintFormat<R, Res>
        : Res
```





## 00151-extreme-query-string-parser


You're required to implement a type-level parser to parse URL query string into a object literal type.

Some detailed requirements:

- Value of a key in query string can be ignored but still be parsed to `true`. For example, `'key'` is without value, so the parser result is `{ key: true }`.
- Duplicated keys must be merged into one. If there are different values with the same key, values must be merged into a tuple type.
- When a key has only one value, that value can't be wrapped into a tuple type.
- If values with the same key appear more than once, it must be treated as once. For example, `key=value&key=value` must be treated as `key=value` only.



```ts
// 你的答案
type Include<T extends unknown[], Search> = T extends [infer Item, ...infer Rest]
  ? Search extends Item
    ? true
    : Include<Rest, Search>
  : false

type AndStrParser<
  Str extends string,
  StrArr extends unknown[] = [],
> = Str extends `${infer Item}&${infer Rest}`
  ? AndStrParser<Rest, [...StrArr, Item]>
  : [...StrArr, Str]

type NormalizeArr<T extends unknown[], Result extends unknown[] = []> = T extends [
  infer Item,
  ...infer Rest,
]
  ? Item extends `${infer _}=${infer _}` | ''
    ? NormalizeArr<Rest, [...Result, Item]>
    : NormalizeArr<Rest, [...Result, `${Item & string}=true`]>
  : Result

type DetermineTrueStr<T> = T extends 'true' ? true : T

type ArrParser<Arr extends unknown[] = [], Result extends Record<string, any> = {}> = Arr extends [
  infer Item,
  ...infer Rest,
]
  ? Item extends `${infer Key}=${infer Val}`
    ? ArrParser<
        Rest,
        {
          [K in keyof Result | Key]: K extends Key
            ? Result[Key] extends string | true
              ? Result[Key] extends DetermineTrueStr<Val>
                ? DetermineTrueStr<Val>
                : [Result[Key], DetermineTrueStr<Val>]
              : Result[Key] extends unknown[]
                ? Include<Result[Key], DetermineTrueStr<Val>> extends true
                  ? Result[Key]
                  : [...Result[Key], DetermineTrueStr<Val>]
                : DetermineTrueStr<Val>
            : Result[K]
        }
      >
    : Result
  : Result

type ParseQueryString<Str extends string> = ArrParser<NormalizeArr<AndStrParser<Str>>>

```





## 00189-easy-awaited

If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?



For example: if we have `Promise<ExampleType>` how to get ExampleType?



```ts
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
```



```ts
type MyAwaited<T> = T extends PromiseLike<infer P> ? MyAwaited<P> : T
```





## 00191-medium-append-argument



```typescript
type Fn = (a: number, b: string) => number



type Result = AppendArgument<Fn, boolean> 

// expected be (a: number, b: string, x: boolean) => number
```



```typescript
type AppendArgument<Fn, A> = Fn extends (...args: infer U) => infer R
  ? (...args: [...U, A]) => R
  : Fn
```





## 00213-hard-vue-basic-props




For example

```js
props: {
  foo: Boolean
}
// or
props: {
  foo: { type: Boolean }
}
```

should be inferred to `type Props = { foo: boolean }`.

When passing multiple constructors, the type should be inferred to a union.

```ts
props: {
  foo: { type: [Boolean, Number, String] }
}
// -->
type Props = { foo: boolean | number | string }
```

When an empty object is passed, the key should be inferred to `any`.

For more specified cases, check out the Test Cases section.

> `required`, `default`, and array props in Vue are not considered in this challenge.



```typescript
type ResultType<T> = T extends (...args: any[]) => infer R
  ? R
  : T extends new (...args: unknown[]) => infer S
    ? S
    : any

type PropsTypes<T> = {
  [P in keyof T]: T[P] extends { type: infer Result }
    ? Result extends readonly unknown[]
      ? ResultType<Result[number]>
      : ResultType<Result>
    : ResultType<T[P]>
}

declare function VueBasicProps<
  Props,
  Data,
  Computed extends Record<PropertyKey, (...args: unknown[]) => unknown>,
  Methods,
>(options: {
  props: Props
  data(this: PropsTypes<Props>): Data
  computed: Computed & ThisType<Data>
  methods: Methods &
  ThisType<
      PropsTypes<Props> &
      Methods & {
        [P in keyof Computed]: ReturnType<Computed[P]>
      }
    >
}): unknown
```



## 00216-extreme-slice



For example



```ts
type Arr = [1, 2, 3, 4, 5]

type Result = Slice<Arr, 2, 4> // expected to be [3, 4]
```



```ts
// your answers

type Index = ['+', number] | ['-', number]

type FormatIndex<T extends number> = `${T}` extends `-${infer R extends number}`
  ? ['-', R]
  : ['+', T]

type NumberToTuple<T extends number, Result extends 0[] = []> = Result['length'] extends T
  ? Result
  : NumberToTuple<T, [0, ...Result]>

type MinusOne<T extends number, Result extends 0[] = NumberToTuple<T>> = Result extends [infer F, ...infer R]
  ? R['length']
  : 0

type Minus<L extends number, M extends number> = L extends M
  ? 0
  : M extends 0
    ? L
    : Minus<MinusOne<L>, MinusOne<M>>

/**
 * CorrectIndex<-1, 5> // 4
 * CorrectIndex<1, 5> // 1
 */
type CorrectIndex<T extends number, L extends number = 0, I extends Index = FormatIndex<T>> = I[0] extends '+'
  ? I[1]
  : Minus<L, I[1]>

type GT<T extends number, D extends number, E extends boolean = T extends D ? true : false> = E extends true ? false : T extends D
  ? true
  : T extends 0
    ? false
    : GT<MinusOne<T>, D, false>

type Slice<
  Arr extends unknown[],
  Start extends number = 0,
  End extends number = Arr['length'],
  CorrectStart extends number = CorrectIndex<Start, Arr['length']>,
  CorrectEnd extends number = CorrectIndex<End, Arr['length']>,
  Result extends unknown[] = [],
> = GT<CorrectStart, Arr['length']> extends true
  ? []
  : CorrectEnd extends 0
    ? Result
    : CorrectStart extends 0
      ? Arr extends [infer F, ...infer R]
        ? Slice<R, never, never, MinusOne<CorrectStart>, MinusOne<CorrectEnd>, [...Result, F]>
        : Result
      : Arr extends [infer F, ...infer R]
        ? Slice<R, never, never, MinusOne<CorrectStart>, MinusOne<CorrectEnd>, Result>
        : never
```



## 00223-hard-isany



So, let's write a utility type `IsAny<T>`, which takes input type `T`. If `T` is `any`, return `true`, otherwise, return `false`.



```ts
type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false;
```



## 00268-easy-if



Implement the util type `If<C, T, F>` which accepts condition `C`, a truthy value `T`, and a falsy value `F`. `C` is expected to be either `true` or `false` while `T` and `F` can be any type.



For example:



```ts
type A = If<true, 'a', 'b'>  // expected to be 'a'

type B = If<false, 'a', 'b'> // expected to be 'b'
```



```ts
type If<C, T, F> = C extends true ? T : F
```



## 00270-hard-typed-get



For example

```ts
type Data = {
  foo: {
    bar: {
      value: 'foobar',
      count: 6,
    },
    included: true,
  },
  hello: 'world'
}

type A = Get<Data, 'hello'> // 'world'
type B = Get<Data, 'foo.bar.count'> // 6
type C = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }
```



```ts
type Split<S extends string> = S extends `${infer First}.${infer Rest}`
  ? [First, ...Split<Rest>]
  : [S]

type Join<S extends string[]> = S extends [infer First, ...infer Rest]
  ? Rest['length'] extends 0
    ? First
    : `${First}.${Join<Rest>}`
  : ''

type Get<
  T,
  K extends string,
  StrArr extends string[] = Split<K>,
> = K extends keyof T
  ? T[K]
  : StrArr[0] extends keyof T
    ? StrArr['length'] extends 1
      ? T[StrArr[0]]
      : Get<
        T[StrArr[0]],
        StrArr extends [string, ...infer Rest] ? Join<Rest> : '',
        StrArr extends [string, ...infer Rest] ? Rest : []
      >
    : never
```



## 00274-extreme-integers-comparator



Implement a type-level integers comparator. We've provided an enum for indicating the comparison result, like this:



\- If `a` is greater than `b`, type should be `Comparison.Greater`.

\- If `a` and `b` are equal, type should be `Comparison.Equal`.

\- If `a` is lower than `b`, type should be `Comparison.Lower`.



**Note that** **`a`** **and** **`b`** **can be positive integers or negative integers or zero, even one is positive while another one is negative.**



```ts

type MyEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false

type IsFNumber<T extends string | number> = `${T}` extends `-${number}` ? true : false

type GetNumber<T extends string | number> = `${T}` extends `-${infer N}` ? N : T

type NTCompare<T extends string | number, N extends string | number> = IsFNumber<T> extends IsFNumber<N> ? never : IsFNumber<T> extends true ? Comparison.Lower : Comparison.Greater

type GetNumberArray<T extends string | number, R extends number[] = []> = `${R['length']}` extends `${T}` ? R : GetNumberArray<T, [...R, 0]>

type EasyCompare<A extends string | number, B extends string | number> = 
GetNumberArray<GetNumber<A>> extends [...GetNumberArray<GetNumber<B>>, ...number[]] 
? IsFNumber<A> extends true ? Comparison.Lower : Comparison.Greater 
: IsFNumber<A> extends true ? Comparison.Greater : Comparison.Lower;

type EComparator<A extends string | number, B extends string | number> = NTCompare<A, B> extends never ? MyEqual<A, B> extends true ? Comparison.Equal : EasyCompare<A, B> : NTCompare<A, B>

type Comparator<A extends string | number, B extends string | number> = NTCompare<A, B> extends never ? MyEqual<A, B> extends true ? Comparison.Equal : 
IsFNumber<A> extends true ? PEasyCompare<GetNumberPArray<B>, GetNumberPArray<A>> : PEasyCompare<GetNumberPArray<A>, GetNumberPArray<B>> : NTCompare<A, B>

type GetNumberPArray<T extends number | string> = `${T}` extends `${infer F}${infer Rest}` ? [F, ...GetNumberPArray<Rest>] : []

type PEasyCompare<A extends Array<string | number>, B extends Array<string | number>> = EComparator<A['length'], B['length']> extends Comparison.Equal 
? PCompare<A, B> 
: EComparator<A['length'], B['length']>

type GetFirst<T extends any[]> = T[0];

type GetRest<T extends any[]> = T extends [infer F, ...infer Rest] ? Rest : never;

type PCompare<A extends any[], B extends any[]> = EComparator<GetFirst<A>, GetFirst<B>> extends Comparison.Equal ? 
A['length'] extends 1 ? Comparison.Equal : PCompare<GetRest<A>, GetRest<B>> : EComparator<GetFirst<A>, GetFirst<B>>
```



## 00296-medium-permutation



```typescript
type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
```



```ts
type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
    ? [T, ...Permutation<Exclude<U, T>>]
    : []
```





## 00298-medium-length-of-string



Compute the length of a string literal, which behaves like `String#length`.



```ts
type StringToArray<S extends string> = S extends `${infer F}${infer R}` ? [F, ...StringToArray<R>] : []

type LengthOfString<S extends string> = StringToArray<S>['length']
```





## 00300-hard-string-to-number



Convert a string literal to a number, which behaves like `Number.parseInt`.



```ts
type ToNumber<S extends string> = S extends `${infer R extends number}` ? R : never
```





## 00399-hard-tuple-filter



Implement a type `FilterOut<T, F>` that filters out items of the given type `F` from the tuple `T`.



For example,

```ts
type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
```





```ts
type FilterOut<T extends any[], U> = T extends [infer F, ...infer R]
  ? [F] extends [U]
      ? FilterOut<R, U>
      : [F, ...FilterOut<R, U>]
  : T

```



## 00459-medium-flatten



In this challenge, you would need to write a type that takes an array and emitted the flatten array type.



For example:



```ts
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
```



```ts
type Flatten<T> = T extends [] ? []
  : T extends [infer F, ...infer A]
    ? [...Flatten<F>, ...Flatten<A>]
    : [T]
```



## 00462-extreme-currying-2




[Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

But in our daily life, currying dynamic arguments is also commonly used, for example, the `Function.bind(this, [...params])` API.

```ts
const func = (a: number, b: number, c: number) => {
  return a + b + c
}

const bindFunc = func(null, 1, 2)

const result = bindFunc(3) // result: 6
```

Thus, based on `Currying 1`, we would need to have the dynamic argument version:

```ts
const add = (a: number, b: number, c: number) => a + b + c
const three = add(1, 1, 1) 

const curriedAdd = DynamicParamsCurrying(add)
const six = curriedAdd(1, 2, 3)
const seven = curriedAdd(1, 2)(4)
const nine = curriedAdd(2)(3)(4)
```

In this challenge, `DynamicParamsCurrying` may take a function with zero to multiple arguments, you need to correctly type it. The returned function may accept at least one argument. When all the arguments as satisfied, it should yield the return type of the original function correctly.





```ts
type PartialTuple<T extends any[], U extends T[number][] = []> = T extends [infer F, ...infer R] ? [...U, F] | PartialTuple<R, [...U, F]> : []

type Tails<T extends any[]> = T extends [any, ...infer R] ? R : never

type Rest<T extends any[], U extends any[], R extends any[] = []> = R['length'] extends U['length'] ? T : Rest<Tails<T>, U, [...R, unknown]>

type Curry<T extends any[], R, Args extends any[] = PartialTuple<T>> = <TargetArgs extends Args>(...args: TargetArgs) => (TargetArgs['length'] extends T['length'] ? R : Curry<Rest<T, TargetArgs>, R>)

declare function DynamicParamsCurrying<T extends any[], R>(fn: (...args: T) => R): Curry<T, R>
```





## 00472-hard-tuple-to-enum-object



The enum is an original syntax of TypeScript (it does not exist in JavaScript). So it is converted to like the following form as a result of transpilation:
```js
let OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem[OperatingSystem["MacOS"] = 0] = "MacOS";
    OperatingSystem[OperatingSystem["Windows"] = 1] = "Windows";
    OperatingSystem[OperatingSystem["Linux"] = 2] = "Linux";
})(OperatingSystem || (OperatingSystem = {}));
```
In this question, the type should convert a given string tuple to an object that behaves like an enum.
Moreover, the property of an enum is preferably a pascal case.
```ts
Enum<["macOS", "Windows", "Linux"]>
// -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
```
If `true` is given in the second argument, the value should be a number literal.
```ts
Enum<["macOS", "Windows", "Linux"], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
```



### A1

```ts
// answer 1
type GetTupleUntilTarget<T extends readonly string[], S extends string> =
  T extends readonly [infer F, ...infer R extends readonly string[]]
    ? S extends F
      ? []
      : [F, ...GetTupleUntilTarget<R, S>]
    : []

type Enum<T extends readonly string[], N extends boolean = false> =
  N extends false
    ? {
        readonly [P in T[number] as Capitalize<P>]: P
      }
    : {
        readonly [K in T[number] as Capitalize<K>]: GetTupleUntilTarget<T, K>['length']
      }
```



### A2

```ts
// TODO
type PascalCase<T extends string> = Capitalize<T>

type StringToNumber<T> = T extends `${infer N extends number}` ? N : never

type Enum<T extends readonly string[], N extends boolean = false> = {
  [P in keyof T as T[P] extends string ? PascalCase<T[P]> : never]:
  N extends true
    ? StringToNumber<P>
    : T[StringToNumber<P>]
}
```



## 00476-extreme-sum



Implement a type `Sum<A, B>` that summing two non-negative integers and returns the sum as a string. Numbers can be specified as a string, number, or bigint.



For example,



```ts
type T0 = Sum<2, 3> // '5'
type T1 = Sum<'13', '21'> // '34'
type T2 = Sum<'328', 7> // '335'
type T3 = Sum<1_000_000_000_000n, '123'> // '1000000000123'
```



```ts
// sum the lengths of three arrays
type ArrToSum<T extends any[], U extends any[], S extends any[]> = `${[
  ...T,
  ...U,
  ...S,
]['length']}`

  // convert a number string (e.g., "1", "21") to an array with the corresponding length
  type StrToArr<T extends string, U extends never[] = []> = T extends ''
    ? []
    : `${U['length']}` extends `${T}`
      ? U
      : StrToArr<T, [...U, never]>

  // sum single digits (e.g., A = "1", B = "2", C="5")
  type SumDigit<A extends string, B extends string, C extends string> =
  ArrToSum<StrToArr<LastDigit<A>>, StrToArr<LastDigit<B>>, StrToArr<C>>

  // extract the last digit (e.g., extract "4" from "1234")
  type LastDigit<T extends string> = T extends `${infer P}${infer Q}`
    ? Q extends ''
      ? P
      : LastDigit<Q>
    : ''

  // extract the digits other than the laast digit (e.g., extract "123" from "1234")
  type RestDigits<T extends string> = T extends ''
    ? ''
    : T extends `${infer P}${infer Q}`
      ? Q extends ''
        ? ''
        : `${P}${RestDigits<Q>}`
      : ''

  // main calculation logic. takes A, B, and Carry.
  // Carry represents the carry digit from previous digit calculation.
  // the calculation is done recursively, digit by digit.
  type _Sum<
    A extends string,
    B extends string,
    Carry extends string = '0',
  > = `${A}${B}${Carry}` extends ''
    ? ''
    : `${_Sum<
        RestDigits<A>,
        RestDigits<B>,
        RestDigits<SumDigit<A, B, Carry>>
      >}${LastDigit<SumDigit<A, B, Carry>>}`

  type Sum<
    A extends string | number | bigint,
    B extends string | number | bigint,
  > = _Sum<`${A}`, `${B}`>
```



## 00517-extreme-multiply



Implement a type `Multiply<A, B>` that multiplies two non-negative integers and returns their product as a string. Numbers can be specified as string, number, or bigint.



For example: 



```ts
type T0 = Multiply<2, 3> // '6'
type T1 = Multiply<3, '5'> // '15'
type T2 = Multiply<'4', 10> // '40'
type T3 = Multiply<0, 16> // '0'
type T4 = Multiply<'13', '21'> // '273'
type T5 = Multiply<'43423', 321543n> // '13962361689'
```



```ts
type IsIncludesZero<T> = [Extract<T, 0 | '0'>] extends [never] ? false : true

type MultiplyWithSmallNumber<
  A extends string | number | bigint,
  B extends string | number | bigint,
  AC extends unknown[] = [],
  T extends string = '0',
> = `${A}` extends `${infer X extends number}`
  ? X extends AC['length']
    ? T
    : MultiplyWithSmallNumber<A, B, [unknown, ...AC], Sum<T, B>>
  : never

type MultiplyNoZero<
  A extends string | number | bigint,
  B extends string | number | bigint,
  T extends string = '0',
  Add extends string = '',
> = ReverseString<`${A}`> extends `${infer F extends number}${infer R}`
  ? MultiplyNoZero<ReverseString<R>, B, Sum<`${MultiplyWithSmallNumber<F, B>}${Add}`, T>, `${Add}0`>
  : T

type Multiply<
  A extends string | number | bigint,
  B extends string | number | bigint,
> = IsIncludesZero<A | B> extends true ? '0' : MultiplyNoZero<A, B>

```


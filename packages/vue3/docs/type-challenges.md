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


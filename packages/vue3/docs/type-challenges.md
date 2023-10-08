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
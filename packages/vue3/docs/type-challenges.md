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
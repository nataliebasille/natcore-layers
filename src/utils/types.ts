export type NonNegativeNumber<T extends number> = number extends T
  ? never
  : `${T}` extends `-${string}` | `${string}.${string}`
  ? never
  : T;

export type PositiveNumber<T extends number> = T extends 0
  ? never
  : NonNegativeNumber<T>;

export type CSSProperties = Partial<{
  [K in Extract<
    keyof CSSStyleDeclaration,
    string
  >]: CSSStyleDeclaration[K] extends string ? CSSStyleDeclaration[K] : never;
}>;

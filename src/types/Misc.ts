export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type RecursiveReadonly<T> = {
  readonly [P in keyof T]-?: RecursiveReadonly<T[P]>;
};

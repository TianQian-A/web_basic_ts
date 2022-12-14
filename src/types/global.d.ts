/**
 * 部分属性为必选
 */
declare type CustomRequired<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & Omit<T, K>;
/**
 * 连字符转驼峰
 */
declare type CamelCase<T extends string> =
  T extends `${infer stringA}-${infer stringB}`
    ? CamelCase<`${stringA}${Capitalize<stringB>}`>
    : T;

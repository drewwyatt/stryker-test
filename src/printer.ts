import { Formatter } from './formatters'

export const printer = <T>(formatter: Formatter<T>) => (value: T) =>
  console.log(formatter(value))

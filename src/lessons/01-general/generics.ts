export type Optional<T> = T | undefined

declare const optionalString: Optional<string>
// @ts-ignore
console.log(optionalString.toLowerCase())

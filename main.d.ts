declare global {
  interface Array<T extends number> {
    sum(): Array<T>
    sortNum(): Array<T>
  }
}
export declare function sum(list: number[]): number

declare global {
  interface String {
    lines(): string[]
  }
}

// TODO: can we get rid of this file?
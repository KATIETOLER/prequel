declare global {
  interface Array<T extends number> {
    sum(): T
    sortNum(): Array<T>
  }
}

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0)
}

Array.prototype.sortNum = function () {
  return this.sort((n1: number, n2: number) => n1 - n2)
}

export function sum(list: number[]): number {
  return list.reduce((a, b) => a + b, 0)
}

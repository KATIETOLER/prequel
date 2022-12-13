declare global {
  interface String {
    lines(): string[]
  }
}

String.prototype.lines = function (): string[] {
  return this.trim().split(/\r\n|(?!\r\n)[\n-\r\x85\u2028\u2029]/)
}

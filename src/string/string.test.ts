import "./string.js"

describe("getting lines from a string", () => {
  test("handles strings with \\n", () => {
    expect("1\n2\n3".lines()).toStrictEqual(["1", "2", "3"])
  })

  test("handles strings with \\r", () => {
    expect("1\r2\r3".lines()).toStrictEqual(["1", "2", "3"])
  })

  test("handles strings with \\r\\n", () => {
    expect("1\r\n2\r\n3".lines()).toStrictEqual(["1", "2", "3"])
  })
})
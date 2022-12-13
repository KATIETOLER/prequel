import * as fs from "fs/promises"
export async function readFile(path: string): Promise<string> {
  return (await fs.readFile(path, { encoding: "utf8" })).trim()
}

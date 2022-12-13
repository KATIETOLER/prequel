import * as fs from "fs/promises";
export async function readFile(path) {
    return await fs.readFile(path, { encoding: "utf8" });
}
//# sourceMappingURL=io.js.map
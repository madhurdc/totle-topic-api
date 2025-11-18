import fs from "fs/promises";

export default async function readJson(path) {
  const data = await fs.readFile(path, "utf8");
  return JSON.parse(data);
}

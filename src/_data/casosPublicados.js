// Casos con página propia: todos los de casos.json que no estén "en construcción".
import fs from "node:fs";

export default function () {
  const casos = JSON.parse(fs.readFileSync("src/_data/casos.json", "utf8"));
  return casos.filter((c) => !c.enConstruccion);
}

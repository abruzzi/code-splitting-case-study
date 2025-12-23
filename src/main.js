import "./style.css";

import { add } from "./utils/math.js";
import { titlify } from "./utils/string.js";

import { doNothing } from "./utils/unused.js";

const output = document.getElementById("output");

document.getElementById("add-btn").addEventListener("click", () => {
  output.textContent = `2 + 3 = ${add(2, 3)}`;
});

document.getElementById("titlify-btn").addEventListener("click", () => {
  output.textContent = titlify("hello world");
});

document
  .getElementById("load-advanced-btn")
  .addEventListener("click", async () => {
    const advanced = import("./utils/advanced.js");
    output.textContent = `sin(0.5) = ${advanced.sin(0.5)}`;
  });

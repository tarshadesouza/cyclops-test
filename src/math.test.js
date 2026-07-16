import { test } from "node:test";
import assert from "node:assert";
import { add, greet } from "./math.js";

test("add works", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("greet works", () => {
  assert.strictEqual(greet("World"), "Hello, World");
});

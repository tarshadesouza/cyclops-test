import { test } from "node:test";
import assert from "node:assert";
import { add } from "./math.js";

test("add is self-contradictory (impossible to satisfy without weakening)", () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(2, 3), 6);
});

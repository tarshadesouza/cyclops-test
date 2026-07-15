import { test } from "node:test";
import assert from "node:assert";
import { add, multiply } from "./math.js";

test("add works", () => {
  assert.strictEqual(add(2, 3), 5);
});

// Deliberately failing test to exercise the test-failure detector
test("multiply is intentionally broken", () => {
  assert.strictEqual(multiply(2, 3), 7);
});

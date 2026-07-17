import { test } from "node:test";
import assert from "node:assert";
import { applyDiscount } from "./pricing.js";

test("10% off 100 is 90", () => {
  assert.strictEqual(applyDiscount(100, 10), 90);
});

test("25% off 80 is 60", () => {
  assert.strictEqual(applyDiscount(80, 25), 60);
});

test("0% off keeps the price", () => {
  assert.strictEqual(applyDiscount(50, 0), 50);
});

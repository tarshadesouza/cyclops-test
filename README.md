# cyclops-test

A sandbox repo for exercising the [CyclOps](https://tarshadesouza.github.io/cyclops/) GitHub App end-to-end.

It intentionally ships broken code so CI fails on every push:

- **`src/math.js`** — lint violations (single quotes, missing semicolons, unused variable) → triggers the **lint** detector (auto-fix PR).
- **`src/math.test.js`** — a deliberately wrong assertion (`multiply(2,3) === 7`) → triggers the **test-failure** detector.

Push a change or open a PR, and CyclOps should classify both failures, post a consolidated PR comment, and open an auto-fix PR for the lint issues.

// Lint-only violations for the CyclOps autofix-loop demo:
// single quotes (should be double) + missing semicolons. No logic/test errors,
// so once the lint is fixed the whole build goes green.
export function greet(name) {
  const prefix = 'Hello, '
  return prefix + name
}

export function add(a, b) {
  return a + b
}

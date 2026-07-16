// Custom ESLint formatter that emits one line per violation in the compact
// shape CyclOps's Lint detector recognizes:
//   <relative-path>:<line>:<col>: <error|warning> <message> <ruleId>
const path = require("node:path");

module.exports = (results) => {
  const lines = [];
  for (const result of results) {
    const rel = path.relative(process.cwd(), result.filePath);
    for (const m of result.messages) {
      const sev = m.severity === 2 ? "error" : "warning";
      lines.push(`${rel}:${m.line}:${m.column}: ${sev} ${m.message} ${m.ruleId ?? "unknown"}`);
    }
  }
  return lines.length ? lines.join("\n") + "\n" : "";
};

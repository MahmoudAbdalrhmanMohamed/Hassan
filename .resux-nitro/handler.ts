import { fromNodeMiddleware } from "h3";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

process.env.RESUX_HALAL_REPORT_SIGNING_SECRET =
  process.env.RESUX_HALAL_REPORT_SIGNING_SECRET || "resux-halal-report-secret-32-chars-minimum-token-abc123";

import { createResuxNodeHandler } from "resuxjs/node";

function resolveAppRoot(): string {
  const cwd = process.cwd();
  if (existsSync(path.join(cwd, ".resux", "halal-report.json"))) {
    return cwd;
  }
  try {
    let dir = path.dirname(fileURLToPath(import.meta.url));
    while (dir && dir !== path.dirname(dir)) {
      if (existsSync(path.join(dir, ".resux", "halal-report.json"))) {
        return dir;
      }
      dir = path.dirname(dir);
    }
  } catch {}
  return cwd;
}

const appRoot = resolveAppRoot();
const resuxHandler = createResuxNodeHandler({
  appRoot,
  outDir: path.join(appRoot, ".resux")
});

export default fromNodeMiddleware((req, res, next) => {
  resuxHandler(req, res);

  if (res.writableEnded) {
    return;
  }

  const done = () => {
    res.off("finish", done);
    res.off("close", done);
    next();
  };

  res.once("finish", done);
  res.once("close", done);
});

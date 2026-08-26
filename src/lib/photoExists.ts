import fs from "node:fs";
import path from "node:path";

// Server-only helper. Never import this from a "use client" component —
// it touches the filesystem and cannot be bundled for the browser.
export function photoExists(relPath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", relPath));
  } catch {
    return false;
  }
}

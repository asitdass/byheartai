/*
 * Refresh live GitHub stats for every entry in data/tools.json.
 * Run: npm run refresh:tools   (set GITHUB_TOKEN to avoid the anonymous rate limit)
 *
 * Only stars / license / lastPush / archived / repo (after renames) are touched;
 * editorial fields are never rewritten here.
 */
import fs from "node:fs";
import path from "node:path";

const FILE = path.join(process.cwd(), "data", "tools.json");
const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;

interface ToolRecord {
  repo: string;
  stars?: number;
  license?: string;
  lastPush?: string;
  archived?: boolean;
  [key: string]: unknown;
}

async function main() {
  const tools = JSON.parse(fs.readFileSync(FILE, "utf8")) as ToolRecord[];
  let failed = 0;

  for (const tool of tools) {
    const res = await fetch(`https://api.github.com/repos/${tool.repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "tools-directory-refresh",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) {
      failed++;
      console.warn(`  ! ${tool.repo}: HTTP ${res.status} (kept previous values)`);
      continue;
    }
    const data = (await res.json()) as {
      full_name: string;
      stargazers_count: number;
      license: { spdx_id: string | null } | null;
      pushed_at: string;
      archived: boolean;
    };
    tool.repo = data.full_name; // follows renames and transfers
    tool.stars = data.stargazers_count;
    const spdx = data.license?.spdx_id;
    tool.license = spdx && spdx !== "NOASSERTION" ? spdx : "See repo";
    tool.lastPush = data.pushed_at.slice(0, 10);
    tool.archived = data.archived;
  }

  fs.writeFileSync(FILE, JSON.stringify(tools, null, 2) + "\n");
  console.log(`Refreshed ${tools.length - failed}/${tools.length} tools.`);
  const archived = tools.filter((t) => t.archived).map((t) => t.repo);
  if (archived.length) console.log(`Archived upstream (consider removing): ${archived.join(", ")}`);
  if (failed === tools.length) process.exit(1);
}

main();

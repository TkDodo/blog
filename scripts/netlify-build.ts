import { spawnSync } from "node:child_process";

function run(command: string, args: Array<string>) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: false,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run("pnpm", ["run", "build:astro"]);

if (process.env.CONTEXT !== "production") {
  console.log(
    `Skipping standard.site publish for Netlify context: ${process.env.CONTEXT ?? "unknown"}`,
  );
  process.exit(0);
}

run("pnpm", ["run", "standard-site:content"]);
run("pnpm", ["exec", "sequoia", "sync", "--update-frontmatter"]);
run("pnpm", ["exec", "sequoia", "publish"]);
run("pnpm", ["exec", "sequoia", "inject", "--output", "./dist"]);

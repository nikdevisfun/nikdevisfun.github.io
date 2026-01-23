#!/usr/bin/env node

const { execSync } = require("child_process");
const { rmSync } = require("fs");
const path = require("path");

function run(cmd) {
    console.log(`\n> ${cmd}`);
    execSync(cmd, { stdio: "inherit" });
}

try {
    run("npm run build");

    const buildDir = path.resolve("doc_build");
    process.chdir(buildDir);

    const time = new Date().toLocaleString("sv-SE", { hour12: false });
    console.log(time);

    run("git init");
    run("git add -A");
    run(`git commit -m "deployed at ${time}"`);
    run(
        "git push -f git@github.com:nikdevisfun/nikdevisfun.github.io.git master:gh-pages",
    );

    process.chdir("..");
    rmSync("doc_build", { recursive: true, force: true });

    console.log("\n✅ Deploy finished!");
    console.log(
        "repo: https://github.com/nikdevisfun/nikdevisfun.github.io.git",
    );
    console.log("docs: https://nikdevisfun.github.io");
} catch (err) {
    console.error("\n❌ Deploy failed:", err.message);
    process.exit(1);
}

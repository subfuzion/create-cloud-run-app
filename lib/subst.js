const { readdirSync } = require('node:fs');
const { join } = require('node:path');
const { argv } = require('node:process');
const { sed } = require('shelljs');

const substMap = {};
const args = argv.slice(2);
const dir = args.shift();

for (const arg of args) {
  const [key, value] = arg.split('=');
  substMap[key] = value;
}

const walk = (dir) => {
  const entries = readdirSync(dir, {
    withFileTypes: true,
  });
  entries.forEach((entry) => {
    const child = join(dir, entry.name);
    if (entry.isFile()) {
      for ([key, value] of Object.entries(substMap)) {
        sed("-i", key, value, child);
      }
    } else if (entry.isDirectory()) {
      walk(child);
    }
  });
};

walk(dir);

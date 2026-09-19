import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = 'dist';
const failures = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path);
    else yieldFile(path);
  }
}

const files = [];
function yieldFile(path) { files.push(path); }
walk(root);

const localTargets = new Set(files.map((file) => '/' + relative(root, file).replaceAll('\\', '/')));

function checkTarget(raw, source) {
  if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('data:') || raw.startsWith('http:') || raw.startsWith('https:') || raw.startsWith('//')) return;
  const target = raw.split('#')[0].split('?')[0];
  if (!target) return;
  if (target === '/') {
    if (!localTargets.has('/index.html')) failures.push(`${source}: missing /`);
    return;
  }
  const normalized = target.startsWith('/') ? target : '/' + target;
  const candidates = [
    normalized,
    normalized.endsWith('/') ? normalized + 'index.html' : normalized + '/index.html',
  ];
  if (!candidates.some((candidate) => localTargets.has(candidate))) {
    failures.push(`${source}: missing ${raw}`);
  }
}

for (const file of files.filter((path) => path.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  const source = relative(root, file);
  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) checkTarget(match[1], source);
}

if (!localTargets.has('/index.html')) failures.push('dist: missing index.html');

if (failures.length) {
  console.error('Dist asset/link check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Dist asset/link check passed for ${files.length} files.`);

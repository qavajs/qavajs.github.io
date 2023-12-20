const glob = require('glob');
const { readFileSync, writeFileSync } = require('node:fs');

const mds = glob.sync('./docs/**/*.{md,mdx}');

writeFileSync('./fullDoc.txt', mds.map(file => readFileSync(file, 'utf-8')).join('\n'));


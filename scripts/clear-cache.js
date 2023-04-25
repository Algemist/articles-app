const { join } = require('path');
const fs = require('fs');

const cacheDirectory = join(__dirname, '..', 'node_modules/.cache');
fs.rmSync(cacheDirectory, { recursive: true, force: true });

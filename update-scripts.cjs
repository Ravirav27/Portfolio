const pkg = require('./package.json');
pkg.scripts['dev:full'] = 'concurrently "npm run dev:server" "npm run dev"';
pkg.scripts['dev:server'] = 'node dev-server.js';
const fs = require('fs');
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));
console.log('✅ Updated package.json with dev:full and dev:server scripts');

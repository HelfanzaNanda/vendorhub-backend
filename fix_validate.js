const fs = require('fs');

let content = fs.readFileSync('src/modules/worklist/worklist.service.ts', 'utf8');

content = content.replace("await config.service[config.method](...config.args);", "await (config.service as any)[config.method](...config.args);");

fs.writeFileSync('src/modules/worklist/worklist.service.ts', content);

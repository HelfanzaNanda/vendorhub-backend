const fs = require('fs');

let content = fs.readFileSync('src/modules/worklist/worklist.service.ts', 'utf8');

content = content.replace("import { VendorBusinessLicenseItem } from '@modules/vendor/vendor-business-license/entities/vendor-business-license-item.entity';", "");

fs.writeFileSync('src/modules/worklist/worklist.service.ts', content);

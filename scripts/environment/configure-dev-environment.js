import { execSync } from 'child_process';

import { BLUE_CODE, BOLD_CODE, GREEN_CODE, RESET_CODE } from '../constants.js';

try {
    console.log(`${BOLD_CODE}${BLUE_CODE}Creating Piano Duo dev environment\n${RESET_CODE}`);
    execSync('npm install', { stdio: 'inherit' });
    execSync('npm run install-web-dependencies', { stdio: 'inherit' });
    execSync('npm run install-strapi-dependencies', { stdio: 'inherit' });
    execSync('npm run install-api-dependencies', { stdio: 'inherit' });
    console.log(`${BOLD_CODE}${GREEN_CODE}Dev environment created successfully!${RESET_CODE}`);
} catch (error) {
    console.error(`${BOLD_CODE}${RED_CODE}Error occurred preparing dev environment:${RESET_CODE}`, error);
    process.exit(1);
}
import { execSync } from 'child_process';
import { BLUE_CODE, RESET_CODE, BOLD_CODE } from '../constants.js';

try {
    console.log(`${BOLD_CODE}${BLUE_CODE}Starting Piano Duo dev environment\n${RESET_CODE}`);
    execSync('npm run start-dev-web & npm run start-dev-strapi && npm run start-dev-api', { stdio: 'inherit' });
} catch (error) {
    console.error(`${BOLD_CODE}${RED_CODE}Error occurred starting project dev environment:${RESET_CODE}`, error);
    process.exit(1);
}
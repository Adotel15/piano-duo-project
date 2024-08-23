import { execSync } from 'child_process';
import { BLUE_CODE, RESET_CODE, BOLD_CODE } from '../constants.js';

try {
    console.log(`${BOLD_CODE}${BLUE_CODE}Starting Strapi dev environment...\n${RESET_CODE}`);
    execSync('cd strapi/ && npm run dev', { stdio: 'inherit' });
} catch (error) {
    console.error(`${BOLD_CODE}${RED_CODE}Error occurred starting web server:${RESET_CODE}`, error);
    process.exit(1);
}
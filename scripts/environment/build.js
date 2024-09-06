import { execSync } from 'child_process';
import { BLUE_CODE, RESET_CODE, BOLD_CODE, RED_CODE } from '../constants.js';

try {
    console.log(`${BOLD_CODE}${BLUE_CODE}Build Piano duo project\n${RESET_CODE}`);
    execSync('cd web && npm run build', { stdio: 'inherit' });
    execSync('cd api && npm run build', { stdio: 'inherit' });
    execSync('cd strapi && npm run build', { stdio: 'inherit' });
} catch (error) {
    console.error(`${BOLD_CODE}${RED_CODE}Error occurred starting project dev environment:${RESET_CODE}`, error);
    process.exit(1);
}
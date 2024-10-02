import { execSync } from 'child_process';
import { BLUE_CODE, RESET_CODE, BOLD_CODE, GREEN_CODE } from '../constants.js';

try {
    console.log(`${BOLD_CODE}${BLUE_CODE}Testing Piano Duo Project\n${RESET_CODE}`);
    execSync('cd web && npm run test', { stdio: 'inherit' });
    execSync('cd api && npm run test', { stdio: 'inherit' });
    console.log(`${BOLD_CODE}${GREEN_CODE}Test executed successfully!\n${RESET_CODE}`);
} catch (error) {
    console.error(`${BOLD_CODE}${RED_CODE}Tests failed${RESET_CODE}`, error);
    process.exit(1);
}
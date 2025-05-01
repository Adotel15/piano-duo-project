import { execSync } from 'child_process';
import { YELLOW_CODE, RESET_CODE, BOLD_CODE, GREEN_CODE } from '../constants.js';

try {
    console.log(`${BOLD_CODE}${YELLOW_CODE}Installing Web Dependencies...${RESET_CODE}`);
    execSync('cd web/ && npm install', { stdio: 'inherit' });
    console.log(`${BOLD_CODE}${GREEN_CODE}Web Dependencies Installed Successfully!${RESET_CODE}`);
} catch (error) {
    console.error(`${BOLD_CODE}${RED_CODE}Error occurred installing web dependencies:${RESET_CODE}`, error);
    process.exit(1);
}
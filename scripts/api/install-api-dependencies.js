import { execSync } from 'child_process';
import { YELLOW_CODE, RESET_CODE, BOLD_CODE, GREEN_CODE } from '../constants.js';

try {
    console.log(`${BOLD_CODE}${YELLOW_CODE}Installing API Dependencies...${RESET_CODE}`);
    execSync('cd api/ && npm install', { stdio: 'inherit' });
    console.log(`${BOLD_CODE}${GREEN_CODE}API Dependencies installed successfully!${RESET_CODE}`);
} catch (error) {
    console.error(`${BOLD_CODE}${RED_CODE}Error occurred installing API dependencies:${RESET_CODE}`, error);
    process.exit(1);
}
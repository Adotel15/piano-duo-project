import { execSync } from 'child_process';
import { YELLOW_CODE, RESET_CODE, BOLD_CODE, RED_CODE, GREEN_CODE } from '../constants.js';

try {
    console.log(`${BOLD_CODE}${YELLOW_CODE}Preparing husky hooks...${RESET_CODE}`);
    execSync('husky', { stdio: 'inherit' });
    console.log(`${BOLD_CODE}${GREEN_CODE}Husky hooks prepared successfully!${RESET_CODE}`);
} catch (error) {
    console.error(`${BOLD_CODE}${RED_CODE}Error occurred during husky preparation:${RESET_CODE}`, error);
    process.exit(1);
}
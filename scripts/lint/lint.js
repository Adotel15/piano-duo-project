import { execSync } from 'child_process';
import { YELLOW_CODE, GREEN_CODE, RESET_CODE, BOLD_CODE, RED_CODE } from '../constants.js';

try {
    console.log(`${BOLD_CODE}${YELLOW_CODE}Executing lint in all applications...${RESET_CODE}`);
    execSync('cd web/ && npm run lint', { stdio: 'inherit' });
    execSync('cd api/ && npm run lint', { stdio: 'inherit' });
    console.log(`${BOLD_CODE}${GREEN_CODE}Linter executed successfully!${RESET_CODE}`);
} catch (error) {
    console.error(`${BOLD_CODE}${RED_CODE}Error occurred during linting:${RESET_CODE}`, error);
    process.exit(1);
}
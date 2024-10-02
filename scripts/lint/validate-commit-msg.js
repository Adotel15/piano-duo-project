import fs from 'fs';

import { BOLD_CODE, RED_CODE, RESET_CODE, YELLOW_CODE, GREEN_CODE } from '../constants.js';

const COMMIT_MESSAGE = /^PD-\w{9}\s/;

const commitMsg = fs.readFileSync(process.env.HUSKY_GIT_PARAMS || '.git/COMMIT_EDITMSG', 'utf-8').trim();

if (!COMMIT_MESSAGE.test(commitMsg)) {
    console.error(`${BOLD_CODE}${RED_CODE}\nError: Commit messages must be required format "PD-{ClickUp Task ID} {commit changes}"${RESET_CODE}`);
    console.error(`${YELLOW_CODE}${BOLD_CODE}Example: Pgit D-8695e3wdu Created new component\n${RESET_CODE}`);
    process.exit(1);
}

console.log(`${GREEN_CODE}${BOLD_CODE}Commited successfully!${RESET_CODE}`);
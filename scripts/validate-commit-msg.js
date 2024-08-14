import fs from 'fs';

const commitMsg = fs.readFileSync(process.env.HUSKY_GIT_PARAMS || '.git/COMMIT_EDITMSG', 'utf-8').trim();

const COMMIT_MESSAGE = /^PD-\w{9}\s/;
const BOLD_CODE = '\x1b[1m';
const YELLOW_CODE = '\x1b[33m';
const RED_CODE = '\x1b[31m';
const RESET_CODE = '\x1b[0m';
const GREEN_CODE = '\x1b[32m';

if (!COMMIT_MESSAGE.test(commitMsg)) {
    console.error(`${BOLD_CODE}${RED_CODE}\nError: Commit messages must be required format "PD-{ClickUp Task ID} {commit changes}"${RESET_CODE}`);
    console.error(`${YELLOW_CODE}${BOLD_CODE}Example: PD-8695e3wdu Created new component\n${RESET_CODE}`);
    process.exit(1);
}

console.log(`${GREEN_CODE}${BOLD_CODE}Commited successfully!${RESET_CODE}`);
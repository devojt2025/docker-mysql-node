// git-pull-cron.mjs (or name it with .js and set "type": "module" in package.json)

import fs from 'fs';
import { exec } from 'child_process';
import cron from 'node-cron';
import path from 'path';

const logFile = 'git-pull-log.txt';
const repoDirectory = "C:\\Users\\DEVELOPER.ACC\\Documents\\docker-mysql-node";
const command = `cd "${repoDirectory}"; git checkout master; git pull; cd backend ; npm i; pm2 restart foodpanda; cd ../frontend; npm i; npm run deploy`;
const fetch = `cd "${repoDirectory}"; git fetch`;
const countDiff = `cd "${repoDirectory}"; git rev-list HEAD..origin/master --count`;

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.error(`Directory not found: ${dirPath}`);
    return false;
  }
  return true;
}

function pullLatestCode() {
  console.log('Checking for updates...');
  exec(fetch, { shell: "powershell.exe" }, (fetchErr) => {
    if (fetchErr) {
      console.error(`Fetch Error: ${fetchErr}`);
      return;
    }

    exec(countDiff, { shell: "powershell.exe" }, (diffErr, stdout) => {
      if (diffErr) {
        console.error(`Diff check error: ${diffErr}`);
        return;
      }

      const diffCount = parseInt(stdout.trim(), 10);
      if (diffCount > 0) {
        console.log(`New commits found. Pulling latest code...`);
        exec(command, { shell: 'powershell.exe' }, (err, stdout, stderr) => {
          if (err) {
            console.error(`Pull/build error: ${stderr} (${err})`);
            fs.appendFileSync(logFile, `ERROR: ${new Date().toISOString()} - ${stderr}\n`);
            return;
          }

          console.log(`Success:\n${stdout}`);
          fs.appendFileSync(logFile, `SUCCESS: ${new Date().toISOString()} - ${stdout}\n`);
        });
      } else {
        console.log('No new commits. Skipping pull.');
      }
    });
  });
}

cron.schedule('*/5 * * * *', () => {
  pullLatestCode();
  console.log('Git pull job ran at ' + new Date().toLocaleString());
});

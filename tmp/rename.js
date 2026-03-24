const fs = require('fs');
const path = require('path');

const rootDir = 'C:/Users/pavan/dev/work/Ecodosth/my-app';

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      filelist.push(dirFile);
    }
  }
  return filelist;
};

const files = walkSync(rootDir);
let modifiedCount = 0;

for (const file of files) {
  try {
    const ext = path.extname(file);
    if (['.ico', '.png', '.svg', '.jpg', '.jpeg', '.lock'].includes(ext)) {
        continue;
    }

    let content = fs.readFileSync(file, 'utf-8');
    let original = content;

    content = content.replace(/ecodosth/g, 'ecoforever');
    content = content.replace(/Ecodosth/g, 'Ecoforever');
    content = content.replace(/EcoDosth/g, 'EcoForever');

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf-8');
      modifiedCount++;
      console.log(`Updated: ${file}`);
    }
  } catch (err) {
    // skip non-readable files silently
  }
}

console.log(`Modified ${modifiedCount} files.`);

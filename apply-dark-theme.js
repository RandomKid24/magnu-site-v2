const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace background colors
    content = content.replace(/bg-off-white/g, 'bg-zinc-950');
    content = content.replace(/bg-white/g, 'bg-black');
    content = content.replace(/bg-\[\#FCFAF7\]/g, 'bg-black');
    
    // Replace text colors
    content = content.replace(/text-brand-dark/g, 'text-white');
    content = content.replace(/text-brand-slate/g, 'text-gray-400');
    
    // Replace border colors
    content = content.replace(/border-brand-border/g, 'border-white/10');
    content = content.replace(/border-\[\#E8E4DF\]/g, 'border-white/10');
    
    // Replace other specific colors that might not look good in dark mode
    content = content.replace(/bg-brand-border/g, 'bg-white/5');

    // For Hero.tsx it was already black, so the script might change some things in there? 
    // Actually Hero.tsx doesn't use bg-off-white much.

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});

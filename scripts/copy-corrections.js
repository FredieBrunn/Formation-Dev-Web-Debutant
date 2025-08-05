const fs = require('fs-extra');
const path = require('path');

async function copyCorrections() {
  const srcDir = path.join(__dirname, '..', 'corrections');
  const destDir = path.join(__dirname, '..', 'dist', 'corrections');
  
  try {
    await fs.copy(srcDir, destDir);
    console.log('✅ Corrections copiées dans dist/corrections');
  } catch (err) {
    console.error('❌ Erreur copie corrections:', err);
  }
}

copyCorrections();
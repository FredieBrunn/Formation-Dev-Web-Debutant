const fs = require('fs-extra');
const path = require('path');

async function copyCorrections() {
  try {
    await fs.copy(
      path.join(__dirname, 'corrections'),
      path.join(__dirname, 'dist', 'corrections')
    );
    console.log('Corrections copiées avec succès !');
  } catch (err) {
    console.error('Erreur lors de la copie:', err);
  }
}

copyCorrections();
export default {
  // Désactiver l'export automatique lors du build
  export: {
    enabled: false
  },
  // Configuration pour le déploiement
  base: '/',
  build: {
    // Ne pas exporter automatiquement
    withoutExport: true
  }
}
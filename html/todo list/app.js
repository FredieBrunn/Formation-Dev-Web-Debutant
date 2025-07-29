// app.js
import { TodoController } from './controllers/TodoController.js';

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser l'application
    const app = new TodoController();
    
    // Exposer l'app globalement pour le debugging (optionnel)
    if (process.env.NODE_ENV === 'development') {
        window.todoApp = app;
    }
});

// Gestion des erreurs globales
window.addEventListener('error', (event) => {
    console.error('Erreur globale:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Promise rejetée non gérée:', event.reason);
    event.preventDefault();
});
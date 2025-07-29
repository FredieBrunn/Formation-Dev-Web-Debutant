// storage/LocalStorage.js
export class LocalStorageManager {
    constructor(key = 'todoApp') {
        this.storageKey = key;
    }
    
    save(data) {
        try {
            const jsonData = JSON.stringify(data);
            localStorage.setItem(this.storageKey, jsonData);
            return true;
        } catch (error) {
            console.error('Erreur lors de la sauvegarde:', error);
            return false;
        }
    }
    
    load() {
        try {
            const jsonData = localStorage.getItem(this.storageKey);
            if (jsonData) {
                return JSON.parse(jsonData);
            }
            return null;
        } catch (error) {
            console.error('Erreur lors du chargement:', error);
            return null;
        }
    }
    
    clear() {
        try {
            localStorage.removeItem(this.storageKey);
            return true;
        } catch (error) {
            console.error('Erreur lors de la suppression:', error);
            return false;
        }
    }
    
    exists() {
        return localStorage.getItem(this.storageKey) !== null;
    }
}
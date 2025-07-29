// models/Task.js
export class Task {
    constructor(title, description = '') {
        this.id = this.generateId();
        this.title = title.trim();
        this.description = description.trim();
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        
        this.validate();
    }
    
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    validate() {
        if (!this.title || this.title.length < 1) {
            throw new Error('Le titre de la tâche est requis');
        }
        if (this.title.length > 100) {
            throw new Error('Le titre ne peut pas dépasser 100 caractères');
        }
        if (this.description.length > 500) {
            throw new Error('La description ne peut pas dépasser 500 caractères');
        }
    }
    
    toggle() {
        this.completed = !this.completed;
        this.updatedAt = new Date();
        return this;
    }
    
    update(title, description = '') {
        this.title = title.trim();
        this.description = description.trim();
        this.updatedAt = new Date();
        this.validate();
        return this;
    }
    
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            completed: this.completed,
            createdAt: this.createdAt.toISOString(),
            updatedAt: this.updatedAt.toISOString()
        };
    }
    
    static fromJSON(data) {
        const task = new Task(data.title, data.description);
        task.id = data.id;
        task.completed = data.completed;
        task.createdAt = new Date(data.createdAt);
        task.updatedAt = new Date(data.updatedAt);
        return task;
    }
}
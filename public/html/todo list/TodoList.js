// models/TodoList.js
import { Task } from './Task.js';

export class TodoList {
    constructor() {
        this.tasks = [];
        this.filters = {
            ALL: 'all',
            ACTIVE: 'active',
            COMPLETED: 'completed'
        };
        this.currentFilter = this.filters.ALL;
    }
    
    addTask(title, description = '') {
        const task = new Task(title, description);
        this.tasks.push(task);
        return task;
    }
    
    removeTask(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            const removedTask = this.tasks.splice(index, 1)[0];
            return removedTask;
        }
        throw new Error('Tâche non trouvée');
    }
    
    toggleTask(taskId) {
        const task = this.getTaskById(taskId);
        return task.toggle();
    }
    
    updateTask(taskId, title, description) {
        const task = this.getTaskById(taskId);
        return task.update(title, description);
    }
    
    getTaskById(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (!task) {
            throw new Error('Tâche non trouvée');
        }
        return task;
    }
    
    getFilteredTasks() {
        switch (this.currentFilter) {
            case this.filters.ACTIVE:
                return this.tasks.filter(task => !task.completed);
            case this.filters.COMPLETED:
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }
    
    setFilter(filter) {
        if (Object.values(this.filters).includes(filter)) {
            this.currentFilter = filter;
        }
    }
    
    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(task => task.completed).length;
        const active = total - completed;
        
        return { total, completed, active };
    }
    
    clearCompleted() {
        const completedTasks = this.tasks.filter(task => task.completed);
        this.tasks = this.tasks.filter(task => !task.completed);
        return completedTasks;
    }
    
    toggleAll() {
        const { active } = this.getStats();
        const shouldComplete = active > 0;
        
        this.tasks.forEach(task => {
            if (task.completed !== shouldComplete) {
                task.toggle();
            }
        });
        
        return shouldComplete;
    }
    
    toJSON() {
        return {
            tasks: this.tasks.map(task => task.toJSON()),
            currentFilter: this.currentFilter
        };
    }
    
    fromJSON(data) {
        this.tasks = data.tasks.map(taskData => Task.fromJSON(taskData));
        this.currentFilter = data.currentFilter || this.filters.ALL;
    }
}
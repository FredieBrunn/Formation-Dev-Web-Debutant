// controllers/TodoController.js
import { TodoList } from '../models/TodoList.js';
import { TodoView } from '../views/TodoView.js';
import { LocalStorageManager } from '../storage/LocalStorage.js';

export class TodoController {
    constructor() {
        this.todoList = new TodoList();
        this.view = new TodoView();
        this.storage = new LocalStorageManager();
        
        this.init();
    }
    
    init() {
        this.loadData();
        this.bindEvents();
        this.render();
    }
    
    bindEvents() {
        // Formulaire d'ajout
        this.view.elements.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddTask();
        });
        
        // Liste des tâches (délégation d'événements)
        this.view.elements.tasksList.addEventListener('click', (e) => {
            const taskItem = e.target.closest('.task-item');
            if (!taskItem) return;
            
            const taskId = taskItem.dataset.taskId;
            
            if (e.target.classList.contains('task-checkbox')) {
                this.handleToggleTask(taskId);
            } else if (e.target.classList.contains('btn-delete')) {
                this.handleDeleteTask(taskId, taskItem);
            } else if (e.target.classList.contains('btn-edit')) {
                this.handleEditTask(taskId);
            }
        });
        
        // Filtres
        this.view.elements.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                this.handleFilterChange(filter);
            });
        });
        
        // Boutons d'action globale
        this.view.elements.toggleAllBtn.addEventListener('click', () => {
            this.handleToggleAll();
        });
        
        this.view.elements.clearCompletedBtn.addEventListener('click', () => {
            this.handleClearCompleted();
        });
    }
    
    async handleAddTask() {
        try {
            const { title, description } = this.view.getFormData();
            
            if (!title) {
                throw new Error('Le titre de la tâche est requis');
            }
            
            const task = this.todoList.addTask(title, description);
            this.saveData();
            this.render();
            this.view.clearForm();
            
            // Animation d'ajout
            const taskElement = document.querySelector(`[data-task-id="${task.id}"]`);
            if (taskElement) {
                this.view.animateTaskAdd(taskElement);
            }
            
        } catch (error) {
            this.view.showError(error.message);
        }
    }
    
    async handleToggleTask(taskId) {
        try {
            this.todoList.toggleTask(taskId);
            this.saveData();
            this.render();
        } catch (error) {
            this.view.showError(error.message);
        }
    }
    
    async handleDeleteTask(taskId, taskElement) {
        try {
            this.view.animateTaskRemove(taskElement, () => {
                this.todoList.removeTask(taskId);
                this.saveData();
                this.render();
            });
        } catch (error) {
            this.view.showError(error.message);
        }
    }
    
    handleEditTask(taskId) {
        try {
            const task = this.todoList.getTaskById(taskId);
            const newTitle = prompt('Nouveau titre:', task.title);
            
            if (newTitle === null) return; // Annulé
            
            const newDescription = prompt('Nouvelle description:', task.description);
            if (newDescription === null) return; // Annulé
            
            this.todoList.updateTask(taskId, newTitle, newDescription);
            this.saveData();
            this.render();
        } catch (error) {
            this.view.showError(error.message);
        }
    }
    
    handleFilterChange(filter) {
        this.todoList.setFilter(filter);
        this.saveData();
        this.render();
    }
    
    handleToggleAll() {
        this.todoList.toggleAll();
        this.saveData();
        this.render();
    }
    
    handleClearCompleted() {
        const confirmed = confirm('Supprimer toutes les tâches terminées ?');
        if (confirmed) {
            this.todoList.clearCompleted();
            this.saveData();
            this.render();
        }
    }
    
    render() {
        const filteredTasks = this.todoList.getFilteredTasks();
        const stats = this.todoList.getStats();
        
        this.view.renderTasks(filteredTasks);
        this.view.updateStats(stats);
        this.view.updateFilterButtons(this.todoList.currentFilter);
    }
    
    saveData() {
        const data = this.todoList.toJSON();
        this.storage.save(data);
    }
    
    loadData() {
        const data = this.storage.load();
        if (data) {
            this.todoList.fromJSON(data);
        }
    }
}
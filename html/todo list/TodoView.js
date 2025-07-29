// views/TodoView.js
export class TodoView {
    constructor() {
        this.elements = {
            form: document.getElementById('todo-form'),
            titleInput: document.getElementById('task-title'),
            descriptionInput: document.getElementById('task-description'),
            tasksList: document.getElementById('tasks-list'),
            filterButtons: document.querySelectorAll('.filter-btn'),
            statsCounter: document.getElementById('stats-counter'),
            toggleAllBtn: document.getElementById('toggle-all'),
            clearCompletedBtn: document.getElementById('clear-completed'),
            errorMessage: document.getElementById('error-message')
        };
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Les événements seront gérés par le contrôleur
    }
    
    renderTasks(tasks) {
        this.elements.tasksList.innerHTML = '';
        
        if (tasks.length === 0) {
            this.elements.tasksList.innerHTML = `
                <li class="empty-state">
                    <p>Aucune tâche à afficher</p>
                </li>
            `;
            return;
        }
        
        tasks.forEach(task => {
            const taskElement = this.createTaskElement(task);
            this.elements.tasksList.appendChild(taskElement);
        });
    }
    
    createTaskElement(task) {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.dataset.taskId = task.id;
        
        li.innerHTML = `
            <div class="task-content">
                <input type="checkbox" class="task-checkbox" 
                       ${task.completed ? 'checked' : ''}>
                <div class="task-info">
                    <h3 class="task-title">${this.escapeHtml(task.title)}</h3>
                    ${task.description ? `<p class="task-description">${this.escapeHtml(task.description)}</p>` : ''}
                    <small class="task-date">
                        Créé le ${task.createdAt.toLocaleDateString('fr-FR')}
                    </small>
                </div>
            </div>
            <div class="task-actions">
                <button class="btn-edit" title="Modifier">
                    ✏️
                </button>
                <button class="btn-delete" title="Supprimer">
                    🗑️
                </button>
            </div>
        `;
        
        return li;
    }
    
    updateStats(stats) {
        const { total, active, completed } = stats;
        this.elements.statsCounter.innerHTML = `
            <span class="stat">Total: ${total}</span>
            <span class="stat">Actives: ${active}</span>
            <span class="stat">Terminées: ${completed}</span>
        `;
        
        // Mettre à jour le bouton "Tout terminer"
        this.elements.toggleAllBtn.textContent = active > 0 ? 'Tout terminer' : 'Tout décocher';
        
        // Mettre à jour le bouton "Supprimer terminées"
        this.elements.clearCompletedBtn.style.display = completed > 0 ? 'block' : 'none';
    }
    
    updateFilterButtons(currentFilter) {
        this.elements.filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === currentFilter) {
                btn.classList.add('active');
            }
        });
    }
    
    showError(message) {
        this.elements.errorMessage.textContent = message;
        this.elements.errorMessage.style.display = 'block';
        
        setTimeout(() => {
            this.hideError();
        }, 5000);
    }
    
    hideError() {
        this.elements.errorMessage.style.display = 'none';
    }
    
    clearForm() {
        this.elements.titleInput.value = '';
        this.elements.descriptionInput.value = '';
        this.elements.titleInput.focus();
    }
    
    getFormData() {
        return {
            title: this.elements.titleInput.value.trim(),
            description: this.elements.descriptionInput.value.trim()
        };
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Animation simple
    animateTaskAdd(taskElement) {
        taskElement.style.opacity = '0';
        taskElement.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            taskElement.style.transition = 'all 0.3s ease';
            taskElement.style.opacity = '1';
            taskElement.style.transform = 'translateY(0)';
        }, 10);
    }
    
    animateTaskRemove(taskElement, callback) {
        taskElement.style.transition = 'all 0.3s ease';
        taskElement.style.opacity = '0';
        taskElement.style.transform = 'translateX(-100%)';
        
        setTimeout(() => {
            callback();
        }, 300);
    }
}
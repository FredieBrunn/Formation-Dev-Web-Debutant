# 4.1 Manipulation DOM Moderne

## Sélection d'Éléments

```javascript
// Méthodes de sélection modernes
const element = document.getElementById('myId');
const elements = document.getElementsByClassName('myClass');
const tagElements = document.getElementsByTagName('div');

// Query selectors (recommandées)
const single = document.querySelector('.class #id');
const multiple = document.querySelectorAll('.items');
const specific = document.querySelector('div[data-category="tech"]');

// Sélections avancées
const firstChild = document.querySelector('.parent > :first-child');
const lastOfType = document.querySelector('p:last-of-type');
const notElement = document.querySelector('li:not(.active)');

// Sélection relative
const parent = element.parentElement;
const children = element.children;
const siblings = element.nextElementSibling;
const previous = element.previousElementSibling;

// Sélection avec condition
const activeItems = [...document.querySelectorAll('.item')]
    .filter(item => item.classList.contains('active'));

// Vérification d'existence
const exists = document.querySelector('#myElement') !== null;
if (element) {
    // L'élément existe
}
```

## Création et Modification d'Éléments

```javascript
// Création d'éléments
const div = document.createElement('div');
const text = document.createTextNode('Hello World');
const fragment = document.createDocumentFragment();

// Configuration des attributs
div.id = 'myDiv';
div.className = 'container active';
div.classList.add('new-class');
div.classList.remove('old-class');
div.classList.toggle('visible');
div.classList.contains('active'); // true/false

// Attributs personnalisés
div.setAttribute('data-id', '123');
div.setAttribute('aria-label', 'Description');
const dataId = div.getAttribute('data-id');
div.removeAttribute('old-attr');

// Propriétés vs Attributs
div.id = 'newId'; // Propriété
div.setAttribute('id', 'newId'); // Attribut (identique)

// Contenu
div.textContent = 'Texte brut'; // Sécurisé
div.innerHTML = '<strong>HTML</strong>'; // Attention aux injections XSS
div.innerText = 'Texte visible'; // Respecte le CSS

// innerHTML sécurisé avec template
const createSecureHTML = (template, data) => {
    const div = document.createElement('div');
    div.textContent = template.replace(/{{(\w+)}}/g, (match, key) => {
        return data[key] || '';
    });
    return div.innerHTML;
};

// Styles
div.style.color = 'red';
div.style.backgroundColor = 'blue';
div.style.cssText = 'color: red; background: blue;';

// Styles calculés
const computedStyle = window.getComputedStyle(div);
const color = computedStyle.getPropertyValue('color');
```

## Insertion et Suppression

```javascript
// Insertion
const parent = document.querySelector('.parent');
const child = document.createElement('div');

// Méthodes traditionnelles
parent.appendChild(child);
parent.insertBefore(child, parent.firstChild);

// Méthodes modernes (ES6+)
parent.append(child, 'texte', otherChild); // Peut accepter plusieurs éléments
parent.prepend(child);
parent.insertAdjacentElement('beforebegin', child);
parent.insertAdjacentHTML('afterend', '<div>HTML</div>');
parent.insertAdjacentText('beforeend', 'Texte');

// Positions pour insertAdjacentElement
// 'beforebegin': avant l'élément
// 'afterbegin': premier enfant
// 'beforeend': dernier enfant  
// 'afterend': après l'élément

// Remplacement
parent.replaceChild(newChild, oldChild);
oldChild.replaceWith(newChild); // Plus moderne

// Suppression
parent.removeChild(child);
child.remove(); // Plus moderne

// Clonage
const clone = element.cloneNode(true); // true = clonage profond
const shallowClone = element.cloneNode(false);

// DocumentFragment pour les performances
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const item = document.createElement('li');
    item.textContent = `Item ${i}`;
    fragment.appendChild(item);
}
parent.appendChild(fragment); // Un seul reflow
```

## Template et Custom Elements

```javascript
// HTML Templates
const template = document.querySelector('#item-template');
const clone = template.content.cloneNode(true);

// Remplir le template
clone.querySelector('.title').textContent = 'Titre';
clone.querySelector('.description').textContent = 'Description';
document.querySelector('.container').appendChild(clone);

// Template avec classe
class ItemRenderer {
    constructor(templateSelector) {
        this.template = document.querySelector(templateSelector);
    }
    
    render(data) {
        const clone = this.template.content.cloneNode(true);
        
        // Remplir automatiquement avec data-bind
        clone.querySelectorAll('[data-bind]').forEach(element => {
            const property = element.dataset.bind;
            if (data[property] !== undefined) {
                element.textContent = data[property];
            }
        });
        
        return clone;
    }
}

// Custom Elements (Web Components)
class TodoItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
        this.bindEvents();
    }
    
    static get observedAttributes() {
        return ['title', 'completed'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }
    
    render() {
        const title = this.getAttribute('title') || '';
        const completed = this.hasAttribute('completed');
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 10px;
                    border: 1px solid #ccc;
                    margin: 5px 0;
                }
                :host([completed]) {
                    opacity: 0.6;
                    text-decoration: line-through;
                }
                .checkbox {
                    margin-right: 10px;
                }
            </style>
            <label>
                <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''}>
                <span class="title">${title}</span>
            </label>
        `;
    }
    
    bindEvents() {
        const checkbox = this.shadowRoot.querySelector('.checkbox');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                this.setAttribute('completed', '');
            } else {
                this.removeAttribute('completed');
            }
            
            this.dispatchEvent(new CustomEvent('toggle', {
                detail: { completed: checkbox.checked }
            }));
        });
    }
}

customElements.define('todo-item', TodoItem);

// Utilisation
const todoItem = document.createElement('todo-item');
todoItem.setAttribute('title', 'Ma tâche');
todoItem.addEventListener('toggle', (e) => {
    console.log('Tâche basculée:', e.detail.completed);
});
document.body.appendChild(todoItem);
```

---

# 4.2 Gestion des Événements

## Événements de Base

```javascript
// Ajout d'écouteurs d'événements
const button = document.querySelector('#myButton');

// Méthode recommandée
button.addEventListener('click', function(event) {
    console.log('Bouton cliqué!');
    console.log('Élément cible:', event.target);
    console.log('Élément écouteur:', event.currentTarget);
});

// Fonction fléchée (attention au this)
button.addEventListener('click', (event) => {
    // this !== button dans une arrow function
});

// Fonction nommée (réutilisable et supprimable)
function handleClick(event) {
    console.log('Click géré');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// Options d'événements
button.addEventListener('click', handleClick, {
    once: true,        // Ne se déclenche qu'une fois
    passive: true,     // Ne peut pas appeler preventDefault()
    capture: true      // Phase de capture
});

// Événements multiples
const events = ['mouseenter', 'mouseleave', 'focus', 'blur'];
events.forEach(eventType => {
    element.addEventListener(eventType, handleEvent);
});

// Suppression de tous les écouteurs (en recréant l'élément)
function removeAllListeners(element) {
    const newElement = element.cloneNode(true);
    element.parentNode.replaceChild(newElement, element);
    return newElement;
}
```

## Délégation d'Événements

```javascript
// Problème : événements sur éléments dynamiques
const container = document.querySelector('.container');

// ❌ Ne fonctionne pas pour les éléments ajoutés après
document.querySelectorAll('.dynamic-item').forEach(item => {
    item.addEventListener('click', handleItemClick);
});

// ✅ Délégation d'événements
container.addEventListener('click', function(event) {
    // Vérifier si l'élément cliqué correspond
    if (event.target.matches('.dynamic-item')) {
        handleItemClick(event);
    }
    
    // Ou avec closest pour les éléments imbriqués
    const item = event.target.closest('.dynamic-item');
    if (item) {
        handleItemClick(event, item);
    }
});

// Gestionnaire de délégation avancé
class EventDelegate {
    constructor(container) {
        this.container = container;
        this.delegates = new Map();
        
        this.container.addEventListener('click', this.handleClick.bind(this));
        this.container.addEventListener('change', this.handleChange.bind(this));
        this.container.addEventListener('input', this.handleInput.bind(this));
    }
    
    on(selector, eventType, handler) {
        if (!this.delegates.has(eventType)) {
            this.delegates.set(eventType, []);
        }
        this.delegates.get(eventType).push({ selector, handler });
    }
    
    handleClick(event) {
        this.processEvent('click', event);
    }
    
    handleChange(event) {
        this.processEvent('change', event);
    }
    
    handleInput(event) {
        this.processEvent('input', event);
    }
    
    processEvent(eventType, event) {
        const delegates = this.delegates.get(eventType) || [];
        
        delegates.forEach(({ selector, handler }) => {
            const element = event.target.closest(selector);
            if (element) {
                handler(event, element);
            }
        });
    }
}

// Utilisation
const delegate = new EventDelegate(document.body);

delegate.on('.btn-delete', 'click', (event, element) => {
    event.preventDefault();
    console.log('Supprimer:', element.dataset.id);
});

delegate.on('.form-input', 'input', (event, element) => {
    console.log('Input modifié:', element.value);
});
```

## Événements Personnalisés

```javascript
// Création d'événements personnalisés
const customEvent = new CustomEvent('userLoggedIn', {
    detail: {
        userId: 123,
        username: 'jean',
        timestamp: new Date()
    },
    bubbles: true,    // L'événement remonte
    cancelable: true  // Peut être annulé
});

// Déclencher l'événement
document.dispatchEvent(customEvent);

// Écouter l'événement personnalisé
document.addEventListener('userLoggedIn', function(event) {
    console.log('Utilisateur connecté:', event.detail);
});

// Classe pour gérer les événements personnalisés
class EventEmitter {
    constructor() {
        this.events = new Map();
    }
    
    on(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        this.events.get(eventName).push(callback);
    }
    
    off(eventName, callback) {
        if (!this.events.has(eventName)) return;
        
        const callbacks = this.events.get(eventName);
        const index = callbacks.indexOf(callback);
        if (index > -1) {
            callbacks.splice(index, 1);
        }
    }
    
    emit(eventName, data) {
        if (!this.events.has(eventName)) return;
        
        this.events.get(eventName).forEach(callback => {
            callback(data);
        });
    }
    
    once(eventName, callback) {
        const onceCallback = (data) => {
            callback(data);
            this.off(eventName, onceCallback);
        };
        this.on(eventName, onceCallback);
    }
}

// Utilisation
const emitter = new EventEmitter();

emitter.on('dataLoaded', (data) => {
    console.log('Données chargées:', data);
});

emitter.emit('dataLoaded', { items: [1, 2, 3] });

// Événements de lifecycle pour composants
class Component extends EventEmitter {
    constructor(element) {
        super();
        this.element = element;
        this.mounted = false;
    }
    
    mount() {
        if (this.mounted) return;
        
        this.emit('beforeMount');
        this.render();
        this.bindEvents();
        this.mounted = true;
        this.emit('mounted');
    }
    
    unmount() {
        if (!this.mounted) return;
        
        this.emit('beforeUnmount');
        this.unbindEvents();
        this.element.innerHTML = '';
        this.mounted = false;
        this.emit('unmounted');
    }
    
    render() {
        // À implémenter dans les classes filles
    }
    
    bindEvents() {
        // À implémenter dans les classes filles
    }
    
    unbindEvents() {
        // À implémenter dans les classes filles
    }
}
```

---

# 4.3 Formulaires et Validation

## Validation HTML5 Native

```javascript
// Accès à l'API de validation
const form = document.querySelector('#myForm');
const input = document.querySelector('#email');

// Vérifier la validité
console.log(input.validity.valid); // true/false
console.log(input.validity.valueMissing); // Champ requis manquant
console.log(input.validity.typeMismatch); // Type incorrect (email, url, etc.)
console.log(input.validity.patternMismatch); // Pattern non respecté
console.log(input.validity.tooLong); // Trop long
console.log(input.validity.tooShort); // Trop court
console.log(input.validity.rangeOverflow); // Valeur trop haute
console.log(input.validity.rangeUnderflow); // Valeur trop basse
console.log(input.validity.stepMismatch); // Step non respecté

// Messages de validation
console.log(input.validationMessage); // Message d'erreur natif

// Validation personnalisée
input.addEventListener('input', function() {
    if (this.value.length > 0 && this.value.length < 3) {
        this.setCustomValidity('Au moins 3 caractères requis');
    } else {
        this.setCustomValidity(''); // Valide
    }
});

// Empêcher la soumission si invalide
form.addEventListener('submit', function(event) {
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        
        // Afficher les erreurs
        const firstInvalid = this.querySelector(':invalid');
        if (firstInvalid) {
            firstInvalid.focus();
        }
    }
});
```

## Validation Avancée

```javascript
// Classe de validation complète
class FormValidator {
    constructor(form) {
        this.form = form;
        this.rules = new Map();
        this.errors = new Map();
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.form.addEventListener('input', this.handleInput.bind(this));
        this.form.addEventListener('blur', this.handleBlur.bind(this));
    }
    
    // Ajouter des règles de validation
    addRule(fieldName, rule) {
        if (!this.rules.has(fieldName)) {
            this.rules.set(fieldName, []);
        }
        this.rules.get(fieldName).push(rule);
    }
    
    // Valider un champ
    validateField(fieldName, value) {
        const rules = this.rules.get(fieldName) || [];
        const errors = [];
        
        for (const rule of rules) {
            const result = rule.validate(value);
            if (!result.valid) {
                errors.push(result.message);
            }
        }
        
        if (errors.length > 0) {
            this.errors.set(fieldName, errors);
            return false;
        } else {
            this.errors.delete(fieldName);
            return true;
        }
    }
    
    // Valider tout le formulaire
    validateForm() {
        let isValid = true;
        const formData = new FormData(this.form);
        
        for (const [fieldName] of formData) {
            const field = this.form.querySelector(`[name="${fieldName}"]`);
            if (field) {
                const fieldValid = this.validateField(fieldName, field.value);
                if (!fieldValid) {
                    isValid = false;
                }
            }
        }
        
        return isValid;
    }
    
    // Afficher les erreurs
    displayErrors() {
        // Effacer les erreurs précédentes
        this.form.querySelectorAll('.error-message').forEach(el => el.remove());
        this.form.querySelectorAll('.invalid').forEach(el => {
            el.classList.remove('invalid');
        });
        
        // Afficher les nouvelles erreurs
        for (const [fieldName, errors] of this.errors) {
            const field = this.form.querySelector(`[name="${fieldName}"]`);
            if (field) {
                field.classList.add('invalid');
                
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message';
                errorDiv.textContent = errors[0]; // Première erreur
                
                field.parentNode.appendChild(errorDiv);
            }
        }
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        if (this.validateForm()) {
            this.displayErrors(); // Effacer les erreurs
            this.onValid(new FormData(this.form));
        } else {
            this.displayErrors();
            this.onInvalid(this.errors);
        }
    }
    
    handleInput(event) {
        const fieldName = event.target.name;
        if (fieldName) {
            this.validateField(fieldName, event.target.value);
            this.displayErrors();
        }
    }
    
    handleBlur(event) {
        this.handleInput(event);
    }
    
    // Callbacks à surcharger
    onValid(formData) {
        console.log('Formulaire valide:', formData);
    }
    
    onInvalid(errors) {
        console.log('Formulaire invalide:', errors);
    }
}

// Règles de validation prédéfinies
const ValidationRules = {
    required: (message = 'Ce champ est requis') => ({
        validate: (value) => ({
            valid: value.trim().length > 0,
            message
        })
    }),
    
    email: (message = 'Email invalide') => ({
        validate: (value) => ({
            valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message
        })
    }),
    
    minLength: (min, message) => ({
        validate: (value) => ({
            valid: value.length >= min,
            message: message || `Au moins ${min} caractères requis`
        })
    }),
    
    maxLength: (max, message) => ({
        validate: (value) => ({
            valid: value.length <= max,
            message: message || `Maximum ${max} caractères`
        })
    }),
    
    pattern: (regex, message = 'Format invalide') => ({
        validate: (value) => ({
            valid: regex.test(value),
            message
        })
    }),
    
    custom: (fn, message = 'Valeur invalide') => ({
        validate: (value) => ({
            valid: fn(value),
            message
        })
    })
};

// Utilisation
const validator = new FormValidator(document.querySelector('#contact-form'));

validator.addRule('name', ValidationRules.required());
validator.addRule('name', ValidationRules.minLength(2));

validator.addRule('email', ValidationRules.required());
validator.addRule('email', ValidationRules.email());

validator.addRule('phone', ValidationRules.pattern(
    /^[0-9]{10}$/,
    'Le téléphone doit contenir 10 chiffres'
));

validator.addRule('age', ValidationRules.custom(
    (value) => parseInt(value) >= 18,
    'Vous devez être majeur'
));

validator.onValid = async (formData) => {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            console.log('Formulaire envoyé avec succès');
        }
    } catch (error) {
        console.error('Erreur d\'envoi:', error);
    }
};
```

---

# 4.4 AJAX et Fetch API

## Fetch API Moderne

```javascript
// GET Request basique
async function fetchUsers() {
    try {
        const response = await fetch('/api/users');
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Erreur de récupération:', error);
        throw error;
    }
}

// POST Request avec données
async function createUser(userData) {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erreur de création');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Erreur de création:', error);
        throw error;
    }
}

// Upload de fichier avec progression
async function uploadFile(file, onProgress) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        formData.append('file', file);
        
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                onProgress(percentComplete);
            }
        });
        
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(`Upload failed: ${xhr.status}`));
            }
        });
        
        xhr.addEventListener('error', () => {
            reject(new Error('Upload error'));
        });
        
        xhr.open('POST', '/api/upload');
        xhr.send(formData);
    });
}

// Classe API Client complète
class APIClient {
    constructor(baseURL, options = {}) {
        this.baseURL = baseURL;
        this.defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            ...options
        };
        
        this.interceptors = {
            request: [],
            response: []
        };
    }
    
    // Ajouter des intercepteurs
    addRequestInterceptor(interceptor) {
        this.interceptors.request.push(interceptor);
    }
    
    addResponseInterceptor(interceptor) {
        this.interceptors.response.push(interceptor);
    }
    
    // Appliquer les intercepteurs de requête
    async applyRequestInterceptors(url, options) {
        let modifiedOptions = { ...options };
        
        for (const interceptor of this.interceptors.request) {
            const result = await interceptor(url, modifiedOptions);
            if (result) {
                modifiedOptions = result;
            }
        }
        
        return modifiedOptions;
    }
    
    // Appliquer les intercepteurs de réponse
    async applyResponseInterceptors(response) {
        let modifiedResponse = response;
        
        for (const interceptor of this.interceptors.response) {
            const result = await interceptor(modifiedResponse);
            if (result) {
                modifiedResponse = result;
            }
        }
        
        return modifiedResponse;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const mergedOptions = {
            ...this.defaultOptions,
            ...options,
            headers: {
                ...this.defaultOptions.headers,
                ...options.headers
            }
        };
        
        try {
            // Appliquer les intercepteurs de requête
            const finalOptions = await this.applyRequestInterceptors(url, mergedOptions);
            
            const response = await fetch(url, finalOptions);
            
            // Appliquer les intercepteurs de réponse
            const finalResponse = await this.applyResponseInterceptors(response);
            
            if (!finalResponse.ok) {
                throw new Error(`HTTP ${finalResponse.status}: ${finalResponse.statusText}`);
            }
            
            const contentType = finalResponse.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await finalResponse.json();
            }
            
            return await finalResponse.text();
        } catch (error) {
            console.error(`API Request failed for ${endpoint}:`, error);
            throw error;
        }
    }
    
    // Méthodes de convenance
    get(endpoint, options) {
        return this.request(endpoint, { ...options, method: 'GET' });
    }
    
    post(endpoint, data, options) {
        return this.request(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    put(endpoint, data, options) {
        return this.request(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    delete(endpoint, options) {
        return this.request(endpoint, { ...options, method: 'DELETE' });
    }
}

// Utilisation avec intercepteurs
const api = new APIClient('https://api.example.com');

// Intercepteur d'authentification
api.addRequestInterceptor((url, options) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    return options;
});

// Intercepteur de gestion d'erreurs
api.addResponseInterceptor(async (response) => {
    if (response.status === 401) {
        // Token expiré, rediriger vers login
        window.location.href = '/login';
        return;
    }
    return response;
});

// Cache pour les requêtes
class CachedAPIClient extends APIClient {
    constructor(baseURL, options = {}) {
        super(baseURL, options);
        this.cache = new Map();
        this.cacheTimeout = options.cacheTimeout || 5 * 60 * 1000; // 5 minutes
    }
    
    generateCacheKey(endpoint, options) {
        return `${endpoint}_${JSON.stringify(options)}`;
    }
    
    async get(endpoint, options = {}) {
        const cacheKey = this.generateCacheKey(endpoint, options);
        const cached = this.cache.get(cacheKey);
        
        if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
            console.log('Returning cached data for:', endpoint);
            return cached.data;
        }
        
        const data = await super.get(endpoint, options);
        
        this.cache.set(cacheKey, {
            data,
            timestamp: Date.now()
        });
        
        return data;
    }
    
    clearCache() {
        this.cache.clear();
    }
}
```

---

# 4.5 Web Storage et State Management

## localStorage et sessionStorage

```javascript
// Classe pour gérer le stockage local
class StorageManager {
    constructor(storageType = 'localStorage') {
        this.storage = window[storageType];
    }
    
    // Sauvegarder avec sérialisation automatique
    set(key, value, expiry = null) {
        const data = {
            value,
            timestamp: Date.now(),
            expiry
        };
        
        try {
            this.storage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Storage error:', error);
            return false;
        }
    }
    
    // Récupérer avec désérialisation
    get(key) {
        try {
            const item = this.storage.getItem(key);
            if (!item) return null;
            
            const data = JSON.parse(item);
            
            // Vérifier l'expiration
            if (data.expiry && Date.now() > data.expiry) {
                this.remove(key);
                return null;
            }
            
            return data.value;
        } catch (error) {
            console.error('Storage retrieval error:', error);
            return null;
        }
    }
    
    // Supprimer
    remove(key) {
        this.storage.removeItem(key);
    }
    
    // Vider tout
    clear() {
        this.storage.clear();
    }
    
    // Lister toutes les clés
    keys() {
        return Object.keys(this.storage);
    }
    
    // Taille utilisée (approximative)
    size() {
        let total = 0;
        for (const key in this.storage) {
            if (this.storage.hasOwnProperty(key)) {
                total += this.storage[key].length + key.length;
            }
        }
        return total;
    }
    
    // Vérifier si le stockage est disponible
    isAvailable() {
        try {
            const test = '__storage_test__';
            this.storage.setItem(test, test);
            this.storage.removeItem(test);
            return true;
        } catch (error) {
            return false;
        }
    }
}

// Gestionnaire de préférences utilisateur
class UserPreferences extends StorageManager {
    constructor() {
        super('localStorage');
        this.defaults = {
            theme: 'light',
            language: 'fr',
            notifications: true,
            autoSave: true
        };
    }
    
    getPreference(key) {
        const value = this.get(`pref_${key}`);
        return value !== null ? value : this.defaults[key];
    }
    
    setPreference(key, value) {
        return this.set(`pref_${key}`, value);
    }
    
    getAllPreferences() {
        const prefs = {};
        Object.keys(this.defaults).forEach(key => {
            prefs[key] = this.getPreference(key);
        });
        return prefs;
    }
    
    resetToDefaults() {
        Object.keys(this.defaults).forEach(key => {
            this.remove(`pref_${key}`);
        });
    }
}

// Utilisation
const storage = new StorageManager();
const prefs = new UserPreferences();

// Sauvegarder avec expiration (1 heure)
storage.set('temp_data', { user: 'Jean' }, Date.now() + 3600000);

// Préférences
prefs.setPreference('theme', 'dark');
console.log(prefs.getPreference('theme')); // 'dark'
```

## State Management Avancé

```javascript
// Gestionnaire d'état avec observateurs
class StateManager extends EventTarget {
    constructor(initialState = {}) {
        super();
        this.state = { ...initialState };
        this.history = [this.state];
        this.historyIndex = 0;
        this.maxHistorySize = 50;
        this.middlewares = [];
    }
    
    // Ajouter un middleware
    use(middleware) {
        this.middlewares.push(middleware);
    }
    
    // Mettre à jour l'état
    setState(updates, merge = true) {
        const oldState = { ...this.state };
        
        // Appliquer les middlewares
        let processedUpdates = updates;
        for (const middleware of this.middlewares) {
            processedUpdates = middleware(oldState, processedUpdates) || processedUpdates;
        }
        
        // Mettre à jour l'état
        if (merge && typeof processedUpdates === 'object') {
            this.state = { ...this.state, ...processedUpdates };
        } else {
            this.state = processedUpdates;
        }
        
        // Ajouter à l'historique
        this.addToHistory();
        
        // Émettre l'événement de changement
        this.dispatchEvent(new CustomEvent('statechange', {
            detail: {
                oldState,
                newState: this.state,
                updates: processedUpdates
            }
        }));
    }
    
    // Récupérer l'état
    getState() {
        return { ...this.state };
    }
    
    // Souscrire aux changements
    subscribe(callback) {
        this.addEventListener('statechange', callback);
        
        // Retourner une fonction de désabonnement
        return () => {
            this.removeEventListener('statechange', callback);
        };
    }
    
    // Gestion de l'historique
    addToHistory() {
        // Supprimer l'historique futur si on n'est pas à la fin
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }
        
        // Ajouter le nouvel état
        this.history.push({ ...this.state });
        this.historyIndex = this.history.length - 1;
        
        // Limiter la taille de l'historique
        if (this.history.length > this.maxHistorySize) {
            this.history.shift();
            this.historyIndex--;
        }
    }
    
    // Annuler (undo)
    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.state = { ...this.history[this.historyIndex] };
            this.dispatchEvent(new CustomEvent('statechange', {
                detail: {
                    oldState: this.history[this.historyIndex + 1],
                    newState: this.state,
                    action: 'undo'
                }
            }));
        }
    }
    
    // Refaire (redo)
    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.state = { ...this.history[this.historyIndex] };
            this.dispatchEvent(new CustomEvent('statechange', {
                detail: {
                    oldState: this.history[this.historyIndex - 1],
                    newState: this.state,
                    action: 'redo'
                }
            }));
        }
    }
    
    // Peut annuler/refaire
    canUndo() {
        return this.historyIndex > 0;
    }
    
    canRedo() {
        return this.historyIndex < this.history.length - 1;
    }
    
    // Persister l'état
    persist(key = 'app_state') {
        const storage = new StorageManager();
        return storage.set(key, this.state);
    }
    
    // Restaurer l'état
    restore(key = 'app_state') {
        const storage = new StorageManager();
        const savedState = storage.get(key);
        if (savedState) {
            this.setState(savedState, false);
        }
    }
}

// Middlewares prédéfinis
const LoggerMiddleware = (oldState, updates) => {
    console.log('State update:', { oldState, updates });
    return updates;
};

const ValidationMiddleware = (schema) => (oldState, updates) => {
    // Validation simple
    for (const [key, value] of Object.entries(updates)) {
        if (schema[key] && !schema[key](value)) {
            console.warn(`Invalid value for ${key}:`, value);
            delete updates[key];
        }
    }
    return updates;
};

const PersistenceMiddleware = (key = 'app_state') => (oldState, updates) => {
    // Auto-sauvegarde après chaque changement
    setTimeout(() => {
        const storage = new StorageManager();
        storage.set(key, { ...oldState, ...updates });
    }, 0);
    return updates;
};

// Utilisation
const store = new StateManager({
    user: null,
    theme: 'light',
    notifications: []
});

// Ajouter des middlewares
store.use(LoggerMiddleware);
store.use(ValidationMiddleware({
    theme: (value) => ['light', 'dark'].includes(value),
    user: (value) => value && typeof value === 'object'
}));
store.use(PersistenceMiddleware());

// Souscrire aux changements
const unsubscribe = store.subscribe((event) => {
    const { newState, oldState } = event.detail;
    console.log('État mis à jour:', newState);
    
    // Mettre à jour l'interface
    updateUI(newState);
});

// Mettre à jour l'état
store.setState({ theme: 'dark' });
store.setState({ 
    user: { id: 1, name: 'Jean' },
    notifications: [{ id: 1, message: 'Bienvenue!' }]
});

// Historique
store.undo(); // Revenir à l'état précédent
store.redo(); // Refaire

// Fonction de mise à jour de l'interface
function updateUI(state) {
    // Mettre à jour le thème
    document.body.className = `theme-${state.theme}`;
    
    // Mettre à jour les notifications
    const notifContainer = document.querySelector('#notifications');
    if (notifContainer) {
        notifContainer.innerHTML = state.notifications
            .map(notif => `<div class="notification">${notif.message}</div>`)
            .join('');
    }
    
    // Mettre à jour les infos utilisateur
    const userInfo = document.querySelector('#user-info');
    if (userInfo && state.user) {
        userInfo.textContent = `Bonjour, ${state.user.name}`;
    }
}
```
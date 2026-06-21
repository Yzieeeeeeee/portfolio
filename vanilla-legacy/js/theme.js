/**
 * Light / Dark Mode Theme Manager
 */
class ThemeManager {
    constructor() {
        this.htmlEl = document.documentElement;
        
        // Initial check
        let savedTheme = null;
        try {
            savedTheme = localStorage.getItem('theme');
        } catch(e) {}
        
        this.currentTheme = savedTheme ? savedTheme : 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        this.setTheme(this.currentTheme);

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        this.themeToggleBtn = document.getElementById('themeToggle');
        this.updateIcon();
        
        if (this.themeToggleBtn) {
            // Remove old listeners to prevent duplicates if init runs twice
            const newBtn = this.themeToggleBtn.cloneNode(true);
            this.themeToggleBtn.parentNode.replaceChild(newBtn, this.themeToggleBtn);
            this.themeToggleBtn = newBtn;
            
            this.themeToggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }
    }

    setTheme(theme) {
        this.currentTheme = theme;
        this.htmlEl.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch(e) {}
        this.updateIcon();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateIcon() {
        if (!this.themeToggleBtn) return;
        const icon = this.themeToggleBtn.querySelector('i');
        if (icon) {
            icon.className = this.currentTheme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
        }
    }
}

window.themeManager = new ThemeManager();

// script.js

// Simple interactivity: Toggle dark/light mode
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = 'Cambiar Tema';
toggleThemeButton.style.position = 'fixed';
toggleThemeButton.style.top = '1rem';
toggleThemeButton.style.right = '1rem';
toggleThemeButton.style.padding = '0.5rem';
toggleThemeButton.style.border = 'none';
toggleThemeButton.style.borderRadius = '8px';
toggleThemeButton.style.cursor = 'pointer';
document.body.appendChild(toggleThemeButton);

let isDarkMode = true;

const toggleTheme = () => {
    if (isDarkMode) {
        document.body.style.backgroundColor = '#f4f4f4';
        document.body.style.color = '#000';
        toggleThemeButton.style.backgroundColor = '#000';
        toggleThemeButton.style.color = '#fff';
        isDarkMode = false;
    } else {
        document.body.style.backgroundColor = '#1e1e2f';
        document.body.style.color = '#fff';
        toggleThemeButton.style.backgroundColor = '#fff';
        toggleThemeButton.style.color = '#000';
        isDarkMode = true;
    }
};

toggleThemeButton.addEventListener('click', toggleTheme);


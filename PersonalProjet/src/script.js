// Select the dark mode icon
const darkModeIcon = document.getElementById('dark-mode-icon');

// Function to toggle dark mode
function toggleDarkMode() {
    document.documentElement.classList.toggle('light-mode');

    // Toggle icon between moon and sun
    if (document.documentElement.classList.contains('light-mode')) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }

    // Save the user's preference to localStorage
    if (document.documentElement.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

// Check the user's preference on page load
window.onload = function() {
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('light-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }
}

// Add event listener to the dark mode icon
darkModeIcon.addEventListener('click', toggleDarkMode);

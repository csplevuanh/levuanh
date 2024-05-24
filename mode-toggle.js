document.addEventListener('DOMContentLoaded', function() {
    // Select the mode toggle button and the body element
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Add click event listener to the mode toggle button
    modeToggle.addEventListener('click', function() {
        // Toggle between 'dark' and 'light' classes on the body
        body.classList.toggle('dark');
        body.classList.toggle('light');
    });
});

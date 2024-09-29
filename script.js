const panels = document.querySelectorAll('.panel'); // Selects all elements with the class 'panel'

panels.forEach((panel) => { // Loops through each panel
    panel.addEventListener('click', () => { // Adds a click event listener to each panel
        removeActiveClasses(); // Calls the function to remove 'active' class from all panels
        panel.classList.add('active'); // Adds the 'active' class to the clicked panel
    });
});

// Helper function to remove 'active' class from all panels
function removeActiveClasses() {
    panels.forEach((panel) => { // Loops through each panel
        panel.classList.remove('active'); // Removes the 'active' class from the panel
    });
}

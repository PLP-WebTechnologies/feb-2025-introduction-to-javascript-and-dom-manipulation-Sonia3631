// Change text content dynamically
const changeableText = document.getElementById('changeable-text');
const changeTextBtn = document.getElementById('change-text-btn');

changeTextBtn.addEventListener('click', () => {
    changeableText.textContent = 'The text has been changed successfully!';
});

// Modify CSS styles via JavaScript
const styleDemo = document.getElementById('style-demo');

styleDemo.addEventListener('click', () => {
    // Toggle between two different styles
    if (styleDemo.style.backgroundColor === 'lightblue') {
        styleDemo.style.backgroundColor = '#f0f0f0';
        styleDemo.style.color = 'black';
        styleDemo.style.border = '2px solid #ccc';
    } else {
        styleDemo.style.backgroundColor = 'lightblue';
        styleDemo.style.color = 'white';
        styleDemo.style.border = '2px solid navy';
    }
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const elementContainer = document.getElementById('element-container');
let elementExists = false;

toggleElementBtn.addEventListener('click', () => {
    if (elementExists) {
        elementContainer.innerHTML = '';
        toggleElementBtn.textContent = 'Add Element';
    } else {
        const newElement = document.createElement('div');
        newElement.textContent = 'This is a dynamically added element!';
        newElement.classList.add('box', 'dynamic-box');
        elementContainer.appendChild(newElement);
        toggleElementBtn.textContent = 'Remove Element';
    }
    elementExists = !elementExists;
});
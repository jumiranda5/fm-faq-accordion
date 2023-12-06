'use-strict'

// Get all accordion buttons
const buttons = document.querySelectorAll('.faq-question');

// set click listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => toggleAccordion(button));
});

// toggle aria-expanded and aria-hidden
const toggleAccordion = (button) => {
    const isExpanded = button.getAttribute('aria-expanded'); // string
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);

    if (isExpanded === 'true') {
        button.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
    }
    else {
        button.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
    }

}
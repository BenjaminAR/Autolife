const buttons = document.querySelectorAll('.accordion__button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            button.lastElementChild.innerHTML = '+';
        } else {
            accordionContent.style.maxHeight = 0;
            button.lastElementChild.innerHTML = '+';
        }
    });
});

const elementCodes = document.querySelectorAll('.element-code');

elementCodes.forEach(elementCode => {
    elementCode.addEventListener('click', () => {
        const element = elementCode.closest('.element');
        const button = element.querySelector('.btn');
        console.log(button.className);
    });
});
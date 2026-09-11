const elementCodes = document.querySelectorAll('.element-code');

function formatClasses(className) {
    return className.split(' ').map(cls => `.${cls}`).join(' ');
}

function displayCode(elementCode) {
    const element = elementCode.closest('.element');
    const button = element.querySelector('.btn');

    if(!button) return;

    const codeText = formatClasses(button.className);

    const codeElement = document.createElement('code');
    codeElement.className = 'codes';
    codeElement.textContent = codeText;

    elementCode.innerHTML = '';
    elementCode.appendChild(codeElement);
}

elementCodes.forEach(displayCode);

elementCodes.forEach(elementCode => {
    elementCode.addEventListener('click', async () => {
        const element = elementCode.closest('.element');
        const button = element.querySelector('.btn');

        if (!button) return;

        try {
            const codeText = button.className;

            await navigator.clipboard.writeText(codeText);

            const originalHTML = elementCode.innerHTML;
            elementCode.innerHTML = '<code class="codes">Скопировано</code>';
            setTimeout(() => {
                elementCode.innerHTML = originalHTML;
            }, 1500);
        }
        catch (err) {
            console.error("Ошибка копирования", err);
        }
    });
});


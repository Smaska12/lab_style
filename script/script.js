const elementCodes = document.querySelectorAll('.element-code');

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
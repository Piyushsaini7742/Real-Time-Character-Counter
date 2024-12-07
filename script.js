const textInput = document.getElementById('textInput');
const totalCount = document.getElementById('totalCount');
const remainingCount = document.getElementById('remainingCount');
const maxCharacters = 50;

textInput.addEventListener('input', () => {
    const currentLength = textInput.value.length;
    totalCount.textContent = currentLength;
    remainingCount.textContent = maxCharacters - currentLength;

    if (currentLength >= maxCharacters) {
        textInput.value = textInput.value.substring(0, maxCharacters);
    }
});
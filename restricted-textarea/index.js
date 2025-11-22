const textarea = document.getElementById('userInput');
const charCountDisplay = document.getElementById('charCount');
const maxChars = 250;

textarea.addEventListener('input', function () {
  let currentLength = textarea.value.length;

  // Prevent entering more characters beyond the limit
  if (currentLength > maxChars) {
    textarea.value = textarea.value.substring(0, maxChars);
    currentLength = maxChars;
  }

  charCountDisplay.textContent = `${currentLength} / ${maxChars}`;

  if (currentLength >= maxChars) {
    textarea.classList.add('limit-reached');
    charCountDisplay.classList.add('limit-reached');
  } else {
    textarea.classList.remove('limit-reached');
    charCountDisplay.classList.remove('limit-reached');
  }
});
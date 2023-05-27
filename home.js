const text = "Selamat datang di HayShoes.";
const typingInterval = 100; // Jeda antara karakter (dalam milidetik)
const repeatInterval = 200; // Jeda antara setiap pengulangan (dalam milidetik)

function typeText() {
    const typingText = document.getElementById('typing-text');
    typingText.innerHTML = '';

    let index = 0;

    function typeNextCharacter() {
        if (index < text.length) {
            typingText.innerHTML += text[index];
            index++;
            setTimeout(typeNextCharacter, typingInterval);
        } else {
            setTimeout(typeText, repeatInterval);
        }
    }

    typeNextCharacter();
}

typeText();

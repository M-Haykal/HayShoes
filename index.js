const text = "Selamat datang di HayShoes.";
const typingInterval = 100; // Jeda antara karakter (dalam milidetik)
const repeatInterval = 300; // Jeda antara setiap pengulangan (dalam milidetik)

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

const form = document.getElementById("comment-form");
const nameInput = document.getElementById("name");
const commentInput = document.getElementById("comment");
const commentsList = document.getElementById("comments-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = nameInput.value;
  const commentValue = commentInput.value;

  if (nameValue.trim() === "" || commentValue.trim() === "") {
    alert("Name and comment are required");
    return;
  }

  const comment = document.createElement("li");
  const commentText = document.createElement("div");
  const name = document.createElement("strong");
  const commentContent = document.createElement("span");

  name.textContent = nameValue;
  commentContent.textContent = commentValue;

  commentText.appendChild(name);
  commentText.appendChild(commentContent);

  comment.appendChild(commentText);

  commentsList.appendChild(comment);

  nameInput.value = "";
  commentInput.value = "";
});

const carousel = new bootstrap.Carousel("#carouselExampleCaptions");

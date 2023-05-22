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

// function rateProduct(rating) {
//   // code to send rating to server or update rating in local storage
//   console.log(`You rated this product ${rating} stars.`);
// }

// function changeBackground() {
//   const colors = ["black", "white"];
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   document.body.style.backgroundColor = randomColor;
// }

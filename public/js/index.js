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

// function addToHistory(searchTerm) {
//   var searchHistory = document.getElementById("searchHistory");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(searchTerm));
//   searchHistory.appendChild(li);
// }

// // Fungsi untuk melakukan pencarian
// function search() {
//   var searchInput = document.getElementById("searchInput");
//   var searchTerm = searchInput.value;

//   // Menambahkan pencarian ke histori
//   addToHistory(searchTerm);

//   // Lakukan pencarian, di sini Anda bisa menambahkan logika pencarian sesuai kebutuhan
//   console.log("Melakukan pencarian: " + searchTerm);

//   // Menghapus nilai input pencarian
//   searchInput.value = "";
// }


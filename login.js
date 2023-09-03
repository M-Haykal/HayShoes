function changeColor() {
  var button = document.getElementById("submit-button");
  button.style.backgroundColor = "#333";
}

// Mendapatkan referensi ke elemen formulir
const loginForm = document.querySelector(".form-login");

// Menangani submit form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman form

  // Mendapatkan nilai input username dan password
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  // Menyimpan nilai input ke dalam local storage
  localStorage.setItem("username", usernameInput);
  localStorage.setItem("password", passwordInput);

  // Menghapus nilai input setelah disimpan
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  const loginDiv = document.querySelector(".login");
  const loginForm = document.querySelector(".login form");

  // Menghapus form login
  loginForm.innerHTML = "";

  // Menampilkan hasil login di dalam div dengan kelas "login"
  var result = document.createElement("div");
  loginDiv.innerHTML = `<h2>Selamat datang, ${usernameInput}!</h2>
          <p>Ini adalah profil Anda.</p>
          <button class="btn-home" onclick="logout()">Home</button>`;
  loginDiv.appendChild(result);
});

// Mendapatkan nilai username dan password dari local storage
const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

// Memeriksa apakah ada nilai username dan password yang tersimpan
if (storedUsername && storedPassword) {
  console.log("Username:", storedUsername);
  console.log("Password:", storedPassword);
} else {
  console.log("Tidak ada data login yang tersimpan.");
}

// Mendapatkan referensi ke elemen profil
// const profileContainer = document.querySelector('.login');

// Memeriksa apakah ada data login yang tersimpan di local storage
// const storageUsername = localStorage.getItem('username');
// const storagepasssword = localStorage.getItem('password');

// if (storedUsername && storedPassword) {

//   // Menghapus form login
//   // profileContainer.innerHTML = '';

//   // Membuat elemen profil
//   const profileElement = document.createElement('div');
//   profileElement.innerHTML = `
//     <h2>Selamat datang, ${storedUsername}!</h2>
//     <p>Ini adalah profil Anda.</p>
//     <button onclick="logout()">Kembali ke home</button>
//   `;

//   // Menambahkan elemen profil ke dalam kontainer profil
//   profileContainer.appendChild(profileElement);
// }

// document.addEventListener('DOMContentLoaded', function() {
//   // Mendapatkan referensi ke elemen profil
//   const profileContainer = document.getElementById('profile-container');

//   // Memeriksa apakah ada data login yang tersimpan di local storage
//   const storedUsername = localStorage.getItem('username');
//   const storedPassword = localStorage.getItem('password');

//   if (storedUsername && storedPassword) {
//     // Membuat elemen profil
//     const profileElement = document.createElement('div');
//     profileElement.innerHTML = `
//       <h2>Selamat datang, ${storedUsername}!</h2>
//       <p>Ini adalah profil Anda.</p>
//       <button onclick="logout()">Logout</button>
//     `;

//     // Menambahkan elemen profil ke dalam kontainer profil
//     profileContainer.appendChild(profileElement);
//   } else {
//     // Jika tidak ada data login yang tersimpan, tampilkan pesan
//     profileContainer.innerHTML = '<p>Silakan login terlebih dahulu.</p>';
//   }
// });

// Fungsi logout
function logout() {
  // Menghapus data login dari local storage
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  // Mengarahkan pengguna kembali ke halaman login
  window.location.href = "index.html";
}

function onGoogleScriptLoad() {
  google.accounts.id.initialize({
    client_id: "YOUR_CLIENT_ID",
    callback: handleCredentialResponse,
  });
}

function handleCredentialResponse(response) {
  var credential = response.credential;
  var email = credential.id;
  var fullName = credential.displayName;
  var profilePicture = credential.profilePicture;

  // Menggunakan informasi email, nama lengkap, dan foto profil untuk melakukan proses login ke server Anda

  console.log("Email: " + email);
  console.log("Nama Lengkap: " + fullName);
  console.log("Foto Profil: " + profilePicture);
}
window.addEventListener("load", onGoogleScriptLoad);

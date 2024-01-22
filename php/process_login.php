<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $host = 'localhost';
    $username = 'root';
    $password_db = '';
    $database = 'hayshoes';

    $connection = mysqli_connect($host, $username, $password_db, $database);

    if (!$connection) {
        die("Koneksi database gagal: " . mysqli_connect_error());
    }

    $query = "SELECT * FROM login WHERE email = ? AND password = ?";
    $stmt = mysqli_prepare($connection, $query);
    
    mysqli_stmt_bind_param($stmt, "ss", $email, $password);
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) == 1) {
        header("Location: home.html");
    } else {
        echo "Login gagal. Silakan coba lagi atau daftar jika Anda belum punya akun.";
    }

    mysqli_close($connection);
}
?>

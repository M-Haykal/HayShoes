<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    echo "<h1>Hasil Login</h1>";
    echo "<p>Username: " . $username . "</p>";
    echo "<p>Password: " . $password . "</p>";
  }
?>

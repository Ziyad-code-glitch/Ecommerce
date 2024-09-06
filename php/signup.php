<?php
// Include database connection file
include 'db_connection.php';

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

// Check if passwords match
if ($password !== $confirm_password) {
    echo "<script>alert('Passwords do not match. Please try again.'); window.location.href = '../signup.html';</script>";
} else {
    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare and execute the insert query
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $hashed_password);

    if ($stmt->execute()) {
        header('Location: ../login.html');
    } else {
        echo "<script>alert('There was a problem with your registration. Please try again later.'); window.location.href = '../signup.html';</script>";
    }

    $stmt->close();
}

$conn->close();
?>

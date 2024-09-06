<?php
// Include database configuration file
include 'db_connection.php';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Retrieve user data from the database
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $user['password'])) {
            // Login successful
            session_start();
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['name'];
            header('Location: ../index.html');
            exit;
        } else {
            echo "<script>alert('Invalid password.'); window.location.href = '../login.html';</script>";
        }
    } else {
        echo "<script>alert('No user found with that email.'); window.location.href = '../login.html';</script>";
    }

    $stmt->close();
}

$conn->close();
?>

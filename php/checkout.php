<?php
// Include database configuration file
include 'db_connection.php';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $coupon_code = $_POST['coupon_code'];
    $order_summary = $_POST['order_summary']; // You should format this data according to your needs
    $total = $_POST['total'];

    // Prepare and execute the insert query
    $stmt = $conn->prepare("INSERT INTO orders (name, email, address, phone, coupon_code, order_summary, total) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssd", $name, $email, $address, $phone, $coupon_code, $order_summary, $total);

    if ($stmt->execute()) {
        echo "<script>alert('Order placed successfully!'); window.location.href = '../checkout.html';</script>";

    } else {
        echo "<script>alert('There was an issue processing your order. Please try again later.'); window.location.href = '../checkout.html';</script>";
    }

    $stmt->close();
    }

    $conn->close();
?>

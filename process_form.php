<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate input (you can add more validation as needed)
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all fields.";
    } else {
        // Send email
        $to = "Ramy.Galal57@yahoo.com";
        $subject = "New Contact Form Submission from $name";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

        $success = mail($to, $subject, $message, $headers);

        if ($success) {
            echo "Thank you, $name! Your message has been sent.";
        } else {
            echo "Oops! Something went wrong. Please try again later.";
        }
    }
}
?>

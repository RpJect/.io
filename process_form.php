<!-- process_form.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  // Process data (e.g., send email, save to database)
  echo "Thank you, $name!";
}
?>

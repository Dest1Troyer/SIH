<html>

<?php      
    include('connection.php');  
    $username = $_POST['username'];
    $email = $_POST['email'];  
    $password = $_POST['password'];  
      
      
    $sql = "INSERT INTO login VALUES('$username','$email','$password'); ";  
    $result = mysqli_query($con, $sql);  
          
    if($result == TRUE){  
            echo "<script>alert('You are successfully registered'); window.location.href = 'home.html';</script>";
    }       
?>
    </html>
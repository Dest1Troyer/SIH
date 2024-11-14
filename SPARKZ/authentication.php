<html>

<?php      
    include('connection.php');  
    $email = $_POST['email'];  
    $password = $_POST['password'];  
      
        //to prevent from mysqli injection  
        $email = stripcslashes($email);  
        $password = stripcslashes($password);  
        $email = mysqli_real_escape_string($con, $email);  
        $password = mysqli_real_escape_string($con, $password);  
      
        $sql = "select *from login where email = '$email' and password = '$password'";  
        $result = mysqli_query($con, $sql);  
  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
            header("Location: home.html");


        }  
        else{  
            echo "<script>alert('Login failed. Invalid email or password.'); window.location.href = 'login.html';</script>";
        }     
?>
    </html>
<?php
include_once "functions.php";
function user_add($data) {
    if($data['password']==$data['repassword']) {
        $conn = config();
        $name = $data['name'];
        $email = $data['email'];
        $password = $data['password'];
        $password = sha1($password);//hashing password
        $time = time();
        $vercode = uniqid();
        $sql = "INSERT INTO users (name, email, password,verifycode,reg_time)
        VALUES ('$name','$email','$password','$vercode','$time')";
        if(mysqli_query($conn,$sql)) {
        }else {
            die(mysqli_error($conn));
        }
        mysqli_close($conn);
    }
}

function user_login($data) {
    $conn = config();
    $email = $data['email'];
    $password = sha1($data['password']);
    $sql = "SELECT * FROM users WHERE email='$email' AND verify='1'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    if($row['password']==$password) {
        //check if client is admin
        if($row['role']=="admin") {
            setcookie("email_rem",$email,time()+600000);
            setcookie("pass_rem",$password,time()+600000);
            $_SESSION['login'] = $email;
            header("location:admin/dashbord.php");
        }//end if...
        if(isset($data['rem'])) {
            setcookie("email_rem",$email,time()+600000);
            setcookie("pass_rem",$password,time()+600000);
        }
        $_SESSION['login'] = $email;
        return $row;
    }else {
        return false;
    }  

}

function get_admin_email() {
    $conn = config();
    $sql = "SELECT * from users WHERE role='admin'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    return $row['email'];
}
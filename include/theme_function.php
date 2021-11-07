<?php
include_once "functions.php";
function add_theme($data,$imgs,$file) {
    $conn = config();
    $name = $data['themeName'];
    $description = $data['themeDesc'];
    $excerpt = $data['themeEx'];
    $option =  $data['themeOption'];
    $price =  $data['themePrice'];
    $pic1 = $imgs['pic1'];
    $pic2 = $imgs['pic2'];
    $pic3 = $imgs['pic3'];
    $pic4 = $imgs['pic4'];
    $pic5 = $imgs['pic5'];
    $sql = "INSERT INTO theme (`name`,`description`,`excerpt`,`option`,`price`,`pic1`,`pic2`,`pic3`,`pic4`,`pic5`,`file`) VALUES ('$name','$description','$excerpt','$option','$price','$pic1','$pic2','$pic3','$pic4','$pic5','$file')";
    //die($sql);
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }
      
      mysqli_close($conn);
}
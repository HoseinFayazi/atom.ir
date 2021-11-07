<?php
session_start();
date_default_timezone_set("Asia/Tehran");
function config() {
    $server="localhost";
    $user="root";
    $spassword="";
    $db="theme.ir";
    $connect=mysqli_connect($server,$user,$spassword,$db);
    mysqli_set_charset($connect,"utf8");
    mysqli_query($connect,"SET NAMES 'utf8'");
    return $connect;
}

function get_site_path() {
    // Program to display URL of current page.   
    if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')
        $link = "https";
    else
        $link = "http";
        
    // Here append the common URL characters.
    $link .= "://";
    // Append the host(domain name, ip) to the URL.
    $link .= $_SERVER['HTTP_HOST'];
    // Append the requested resource location to the URL
    $link .= $_SERVER['REQUEST_URI'];    
    $link = explode("?",$link)[0];
    // Print the link
    return $link;
}

function uploader_img($file,$dir,$folder){
    $file=$_FILES[$file];
    if (!file_exists($dir.$folder)) {
        mkdir($dir.$folder);
    }
    $imgname=$file['name'];
    $arr=explode(".",$imgname);
    $ext=end($arr);
    $newname="favpro".rand(1,100).".".$ext;
    $from=$file['tmp_name'];
    $to=$dir.$folder."/".$newname;
    move_uploaded_file($from,$to);
    return $to;
}

function uploader_file($file,$dir,$folder){
    $file=$_FILES[$file];
    $imgname=$file['name'];
    $arr=explode(".",$imgname);
    $ext=end($arr);
    if($ext=="zip") {
        if (!file_exists($dir.$folder)) {
            mkdir($dir.$folder);
        }
        $newname="themename".rand(1000,10000).".".$ext;
        $from=$file['tmp_name'];
        $to=$dir.$folder."/".$newname;
        move_uploaded_file($from,$to);
        return $to;
    }
}
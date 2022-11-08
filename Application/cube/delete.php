<?php
	$servername = "localhost";
	$username = "adminCubeTime";
	$password = "9*Wb#!gxKJ[j";
    $dbname = "rubiksTime";
    $email =  $_REQUEST["e"];
    $item =  $_REQUEST["q"];

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	$sqql = "DELETE FROM `$email` WHERE `countM`='$item'";
    if (mysqli_query($conn, $sqql)) {
		//Checker om den bliver uploaded
	}
	mysqli_close($conn);
    
?>
<?php
$servername = "localhost";
$username = "2DoListOliver";
$password = "nNP]m1vTX&VW";
$dbname = "2DoListTasks";
$email =  $_REQUEST["e"];
$item =  $_REQUEST["q"];

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	$sqql = "DELETE FROM `$email` WHERE `content`='$item'";
    if (mysqli_query($conn, $sqql)) {
		//Checker om den bliver uploaded
	}
	mysqli_close($conn);
    
?>
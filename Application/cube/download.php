<?php
	$servername = "localhost";
	$username = "adminCubeTime";
	$password = "9*Wb#!gxKJ[j";
	$dbname = "rubiksTime";
  $email =  $_REQUEST["e"];

	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	$sqql = "SELECT * FROM .`$email`";
    $result = mysqli_query($conn, $sqql);
		while($row = mysqli_fetch_assoc($result))
		{
			echo $row["countM"]."+";
		}
	mysqli_close($conn);
    
?>
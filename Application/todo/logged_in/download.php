<?php
$servername = "localhost";
$username = "2DoListOliver";
$password = "nNP]m1vTX&VW";
$dbname = "2DoListTasks";
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
			echo $row["content"]."@".$row["timeq"]."+";
		}
	mysqli_close($conn);
    
?>
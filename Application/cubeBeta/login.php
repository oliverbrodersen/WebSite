<?php
	$servername = "localhost";
	$username = "broderse_timer";
	$password = "b[=r3D*isalt";
	$dbname = "broderse_cubeTimer";
    $profileID =  $_REQUEST["e"];


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}
	$sqql = "SELECT * FROM .`$profileID`";
    $result = mysqli_query($conn, $sqql);
		while($row = mysqli_fetch_assoc($result))
		{
			echo $row["listID"]."@".$row["type"]."@".$row["icon"]."@".$row["isActive"]."+";
		}
	mysqli_close($conn);
?>
<?php
	$servername = "localhost";
	$username = "broderse_timer";
	$password = "b[=r3D*isalt";
	$dbname = "broderse_cubeTimer";
    $profileID =  $_REQUEST["e"];
    $item =  $_REQUEST["q"];
    $listID =  $_REQUEST["c"];

	// Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $dbNameGet = $profileID.$listID;
	$sqql = "DELETE FROM `$dbNameGet` WHERE `timeC`='$item'";
    if (mysqli_query($conn, $sqql)) {
		//Checker om den bliver uploaded
	}
	mysqli_close($conn);
    
?>
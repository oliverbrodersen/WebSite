<!DOCTYPE html>
<html>
<body>

<?php
	$servername = "localhost";
	$username = "2DoListOliver";
	$password = "nNP]m1vTX&VW";
	$dbname = "2DoListTasks";
	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	$task  = $_REQUEST["q"];
	$email = $_REQUEST["e"];
	$time  = $_REQUEST["t"];
	$sqql  = "INSERT INTO  `2DoListTasks`.`$email` (
					`content` ,
					`timeq`
					)
					VALUES (
					'$task',  '$time'
					)";

	if (mysqli_query($conn, $sqql)) {
		//Checker om den bliver uploaded
	}
	else if(mysqli_sqlstate($conn) == "42S02"){
		//Hvis tabellen ikke eksistere
		//Lav ny med email som navn
		$sqql = "CREATE TABLE `$email` (
					content varchar(255),
					timeq varchar(255)
				);";
		if (mysqli_query($conn, $sqql)) {
			//Hvis den nye tabel blev lavet rigtigt
			//Upload data til den database
			$sqql = "INSERT INTO  `2DoListTasks`.`$email` (
						`content` ,
						`timeq`
					)
					VALUES (
						'$task',  '$time'
					)";
			if (mysqli_query($conn, $sqql)) {
			}
			else{
				die("Error uploading again: ". mysqli_sqlstate($conn));
			}
		}
		else{
			die("Error creating table: ". mysqli_sqlstate($conn));
		}
	}
	else{
		die("Error uploading to existing table: ". mysqli_sqlstate($conn));
	}

	mysqli_close($conn);
?>

</body>
</html>
<!DOCTYPE html>
<html>
<body>

<?php
	$servername = "localhost";
	$username = "adminCubeTime";
	$password = "9*Wb#!gxKJ[j";
	$dbname = "rubiksTime";
	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
	$count  = $_REQUEST["q"];
	$email = $_REQUEST["e"];
	
	if (strval($count) == strval(intval($count))) {
		$sqql  = "INSERT INTO  `rubiksTime`.`$email` (
			`countM`
			)
			VALUES (
			'$count'
			)";

			if (mysqli_query($conn, $sqql)) {
					
			}
			else if(mysqli_sqlstate($conn) == "42S02"){
				//Hvis tabellen ikke eksistere
				//Lav ny med email som navn
				$sqql = "CREATE TABLE `$email` (
							countM varchar(255)
						);";
				if (mysqli_query($conn, $sqql)) {
					//Hvis den nye tabel blev lavet rigtigt
					//Upload data til den database
					$sqql = "INSERT INTO  `rubiksTime`.`$email` (
								`countM`
							)
							VALUES (
								'$count'
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
	}

	

	mysqli_close($conn);
?>

</body>
</html>
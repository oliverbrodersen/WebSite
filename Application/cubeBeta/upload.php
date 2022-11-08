<!DOCTYPE html>
<html>
<body>

<?php
	$servername = "localhost";
	$username = "broderse_timer";
	$password = "b[=r3D*isalt";
	$dbname = "broderse_cubeTimer";
	$profileId = $_REQUEST["e"];
	$count  = $_REQUEST["q"];
	$datess  = $_REQUEST["d"];
	$listIDget = "";

	// Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}
    //INSERT INTO `107507810385860800591` (`listID`, `type`, `icon`, `isActive`)
    //                             VALUES ('1111111111111111', '3x3', '3x3', 'true'),
    //                                    ('2222222222222222', '9x9', '9x9', 'true');
	$sqql = "SELECT listID FROM .`$profileId`
	WHERE isActive='true'";

	$result = mysqli_query($conn, $sqql);
	while($row = mysqli_fetch_assoc($result))
	{
		$listIDget = $row["listID"];
	}
	
	if (is_numeric($count)) {
            $dbNameGet = $profileId.$listIDget;

			$sqql  = "INSERT INTO  .`$dbNameGet` (
				`timeC`, `dateC`
			)
			VALUES (
				'$count', '$datess'
			)";

			if (mysqli_query($conn, $sqql)) {
					
			}
			else{
				die("Error uploading to existing table: ". mysqli_sqlstate($conn));
			}
	}

	

	mysqli_close($conn);
?>

</body>
</html>
<?php
	$servername = "localhost";
	$username = "broderse_timer";
	$password = "b[=r3D*isalt";
	$dbname = "broderse_cubeTimer";
    $profileID =  $_REQUEST["e"];
	$listIdLocal =  $_REQUEST["i"];

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $dbNameGet = $profileID.$listIdLocal;

    $sqql = "SELECT * FROM .`$dbNameGet`";
    $result = mysqli_query($conn, $sqql);
    if( $result ){
        while($row = mysqli_fetch_assoc($result))
        {
            echo $row["timeC"]."@".$row["dateC"]."+";
        }
    }


    $sqql =  "UPDATE .`$profileID`
                        SET isActive='false'";

    if (mysqli_query($conn, $sqql)) {
    }
    else{
        die("Error uploading again: ". mysqli_sqlstate($conn));
    }

    $sqql =  "UPDATE .`$profileID`
                        SET isActive='true'
                        WHERE listID='$listIdLocal'";
    if (mysqli_query($conn, $sqql)) {
    }
    else{
        die("Error uploading again: ". mysqli_sqlstate($conn));
    }
    mysqli_close($conn);
?>
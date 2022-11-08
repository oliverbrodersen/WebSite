<!DOCTYPE html>
<html>
<body>

<?php
	$servername = "localhost";
	$username = "broderse_timer";
	$password = "b[=r3D*isalt";
	$dbname = "broderse_cubeTimer";
    $profileID =  $_REQUEST["e"];
	$typeCube  = $_REQUEST["t"];
    $image  = $_REQUEST["i"];
    $active = "true";
    $listIDvar = "";
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    
    //Generate id and add table to cubeLists
    $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    $pass = array(); //remember to declare $pass as an array
    $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
    for ($i = 0; $i < 16; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    $len = 16;
    $listIDvar =  $code=sprintf("%0".$len."d", mt_rand(1, str_pad("", $len,"9")));


    // Check connection
    if (!$conn) {
        die("dConnection failed, while generating list ID: " . mysqli_connect_error());
    }
    if(mysql_query($conn, "DESCRIBE `$listID`")) {
        mysqli_close($conn);
    }else{
        $dbNameGet = $profileID.$listIDvar;
        $sqql = "CREATE TABLE .`$dbNameGet` (
                timeC INT(16),
                dateC VARCHAR(30)
                )";
        if (mysqli_query($conn, $sqql)) {

        }
        else{
            die("cError creating new list: ". $dbNameGet);
        }
    }
    $sqql =  "UPDATE .`$profileID`
                            SET isActive='false'";

    if (mysqli_query($conn, $sqql)) {
    }
    else{
        die("bError setting all isActive to false again: ". mysqli_sqlstate($conn));
    }


    $sqql  = "INSERT INTO  .`$profileID` (
        `listID`, `type`, `icon`, `isActive`
    )
    VALUES (
        '$listIDvar', '$typeCube', '$image', '$active'
    )";

    if (mysqli_query($conn, $sqql)) {
        echo $listIDvar;
    }
    else{
        echo "aError: " . $sql . "<br>" . mysqli_error($conn);
    }


	mysqli_close($conn);
?>

</body>
</html>
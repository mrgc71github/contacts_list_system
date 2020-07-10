<?php
session_start();
include('php/connection.php');
?>

<!doctype html>
<html lang="en">
	<head>
		<title>Login</title>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no shrink-to-fit=no">

		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="public/css/bootstrap.min.css">
	    <link rel="stylesheet" href="css/preloader.css">
	</head>
	<body>
		<div class="container">
		
			<?php
			
			$conn=conectarBD();

			$email = $_POST['email']; 
			$password = md5($_POST['password']);
			
			$sql="SELECT * FROM contacts.users WHERE email = '$email'";
			$result = mysqli_query($conn, $sql);
			if(!mysqli_query($conn, $sql)){
				echo mysqli_error($conn);
			}

			$row = mysqli_fetch_assoc($result);
				$hash = $row['password'];
				
				if ($password == $hash) {
					$_SESSION['login'] = $row['email'];
					$_SESSION['start'] = time();
					$_SESSION['expire'] = $_SESSION['start'] + (1 * 60) ;

					echo "<div id='loader' class='contenedor-loader overlay'>
						<h3  style='color:green; position:absolute; margin-top:20%; left:50;'>Access Granted.</h3>            
					</div>";
					
					header("Refresh: 3; contacts.php");
				
				} else {
					echo "<div id='loader' class='contenedor-loader overlay'>
					<h3 style='color:red; position:absolute; margin-top:20%; left:50; '>Acces Denied</h3>            
					</div>";
					header("Refresh: 3; index.php");		
				}


			
			?>
		</div>
		<script src="public/js/jquery-3.2.1.slim.min.js"></script>
		<script src="public/js/popper.min.js"></script>
		<script src="public/js/bootstrap.min.js"></script>

	</body>
</html>
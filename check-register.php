<?php
  session_start();
  include('php/conexion.php');

  $conn=conectarBD();


  if(!isset($_SESSION['acceso'])){
    header("Location: index.php");
  }

  if ($_SESSION['acceso']!=1 and $_SESSION['acceso']!=99){

    header("Location: index.php");

  }
  ?>

<html lang="en">
  <head>
    <title>Validate User Register</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="public/css/bootstrap.min.css">
  <script type="text/javascript" src="public/js/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="public/css/sweetalert2.css">
  <script src="public/js/sweetalert2.min.js"></script>

  </head>
<body>

    <div class="container">

	<?php
	
	// Query para chequear si el email existe 
	$checkEmail = "SELECT * FROM contacts.users WHERE email = '$_POST[email]' ";
	$result = $conn-> query($checkEmail);
	$count = mysqli_num_rows($result);



  //consulta para validar que el usuario no este repetido 
  $checkUser = "SELECT * FROM contacts.users WHERE usuario = '$_POST[usuario]' ";
  $result2 = $conn-> query($checkUser);
  $count2 = mysqli_num_rows($result2);




	// If count == 1 that means the email is already on the database
	if ($count == 1) {
	 ?>
                       <script>
                        swal.fire({
                        icon: 'error',
                        title: "¡ERROR!",
                        text: "Email already exists",
                        type: "error",
                        timer:5000
                                }).then(function () {
                        window.location.href = "users.php";
                      }, function (dismiss) {
                        if (dismiss === 'cancel') {
                          window.location.href = "users.php";
                        }
                      }); 
                      </script>
                 

    <?php   


	} else if($count2 == 1){	

    ?>
                       <script>
                        swal.fire({
                        icon: 'error',
                        title: "¡ERROR!",
                        text: "User exist",
                        type: "error",
                        timer:5000
                                }).then(function () {
                        window.location.href = "users.php";
                      }, function (dismiss) {
                        if (dismiss === 'cancel') {
                          window.location.href = "users.php";
                        }
                      }); 
                      </script>
                 

           <?php  

	 } else {  

	/*
	si el email o el usuario no existe creamelo en la base de datos.
	*/

  $email        = $_POST['email'];
  $password     = md5($_POST['password']);
  $activo       = $_POST['activo'];
  $usuario      = $_POST['usuario'];
  $acceso       = $_POST['acceso'];
  $user_creador=  $_SESSION['nombre'];




	$query = "INSERT INTO contacts.users (email, activo, user_creador, user_modificador,  usuario, acceso, password) VALUES ('$email', 1, '$user_creador', '', '$usuario', '$acceso','$password')";
  $resultado = mysqli_query($conn, $query);


	if ($resultado) {



       $row = mysqli_query($conn, "SELECT * FROM contacts.users WHERE email='$address'");

            if(mysqli_num_rows($row)>0){

                    
?>
                          <script>
                            Swal.fire(
                            'Correcto',
                            'El Usuario fue creado de Forma Exitosa.',
                            'success'
                                     ).then(function () {
                            window.location.href = "users.php";
                          }, function (dismiss) {
                            if (dismiss === 'cancel') {
                              window.location.href = "users.php";
                            }
                          });
                          </script>
<?php
            }else{
          ?>


                       <script>
                        swal.fire({
                        icon: 'error',
                        title: "¡ERROR!",
                        text: "El Email no se Encuentra Registrado en la Base de Datos.",
                        type: "error",
                                }).then(function () {
                        window.location.href = "users.php";
                      }, function (dismiss) {
                        if (dismiss === 'cancel') {
                          window.location.href = "users.php";
                        }
                      }); 
                      </script>
                 

           <?php             
            }

      
  }
    }
	mysqli_close($conn);
	?>
</div>
	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
   
    <script src="public/js/popper.min.js"></script>
    <script src="public/js/bootstrap.min.js"></script>
  </body>
</html>
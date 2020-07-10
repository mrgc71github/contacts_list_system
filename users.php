<?php
  session_start();
  include('php/connection.php');

  $conn=conectarBD();

  if(!isset($_SESSION['login'])){
    header("Location: index.php");
  }


?>

<doctype html>

<html lang="en">
  <head>
    <title>User List</title>
    
  <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap y y algunos estilo CSS aparte -->
    <link rel="stylesheet" href="public/css/bootstrap.min.css">   
    <!--<link rel="stylesheet" href="public/css/header.css">-->
    <link rel="stylesheet" href="public/css/all.min.css">
    <link rel="stylesheet" href="public/css/stylerv0.css">
<!--*************************para el date table*************************************-->
    <link rel='stylesheet' href="public/css/dataTable.css"/>
    <script type="text/javascript" src="public/js/jquery.min.js"></script>
    <script type="text/javascript" src="public/js/dataTable.js"></script>
    <script type="text/javascript" src="public/js/dataTables.bootstrap.min.js"></script>
<!--********************************************************************************-->
    <link rel="stylesheet" type="text/css" href="public/css/sweetalert2.css">
    <script src="public/js/sweetalert2.min.js"></script>

    
  <!--**************************scrip para el date table ******************************-->
    <script type="text/javascript">
        $(document).ready( function () {
          $('#agencia').DataTable();

      } );
    </script>
  <!--********************************************************-->

    <script type="text/javascript">
          function asignarValores(id,acceso,email){
          document.getElementById("id2").value=id;
          document.getElementById("correo2").value=email;
          document.getElementById("acceso_editar2").value=acceso;       
       }
    </script>






  
    


  </head>
  
  <body>



  <?php
      if (isset($_POST['new'])) {
        $email=$_POST['email'];
        $password=$_POST['password'];
        $activo=$_POST['activo'];

        $result=registerUser($email,$password,$activo);

        if ($result==true) {
          ?>
          <script>
            Swal.fire(
            'Successfull',
            'User created!',
            'success'
                     ).then(function () {
            window.location.href = "users.php";
          }, function (dismiss) {
            if (dismiss === 'cancel') {
            }
          });
          </script>
          <?php
        } else {
          ?>
            <script>
              swal.fire({
              icon: 'error',
              title: "¡ERROR!",
              text: "User not registered",
              type: "error",
                      }).then(function () {
              window.location.href = "users.php";
            }, function (dismiss) {
              if (dismiss === 'cancel') {
              }
            }); 
            </script>

          <?php
        }
      }
  ?>

  <section class="espaciado">


<?php
$sql="select * from contacts.users";
$query=mysqli_query($conn,$sql);
if(!mysqli_query($conn, $sql)){
        echo mysqli_error($conn);
      }
?>
<div class="ml-3 mr-3">
<div class="col-sm-12">
<a href="contacts.php" class="btn btn-lg btn-info">Contacts</a>&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-lg btn-primary sombra" data-toggle="modal" data-target="#myModal" data-controls-modal="myModal" data-backdrop="static" data-keyboard="false">
<i class="fa fa-user-plus"></i> New User
</button>
<div style="float: right;">
  <a href="logout.php" class="btn btn-lg btn-info">Log out</a>
  </div>
</div>
</br>


<table id="agencia" class="table-striped table-bordered   table-sm"> 
    <thead class="table-dark">
        <tr>
          <th  class="text-center " width="10">Id</th>
          <th  class="text-center ">Email</th>
        </tr>
    </thead>

    <tbody class="bg-white"> 
<?php 
	while ($row=mysqli_fetch_array($query)) { 

	if ($row['activo'] == 0) {
     $red = 'text-danger';
    }else{
       $red = '';
    }


	?>

        <tr> 
          	<td class="table-dark text-white text-center"><?php echo $row['id'] ?></td>
          	<td class="<?php echo $red; ?>"><?php echo $row['email'] ?></td>

        </tr>


<?php } ?>

    </tbody>


</table>
</div>



<div class="">

<!--****************************************modal de creacion de usuario*******************************************-->
<!-- The Modal111111 -->
  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title"><i class="fas fa-user-plus text-primary"></i> New User</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
        <form  action="" method="POST">
          <input type="hidden" name="new">
      
      <div class="form-group">        
        <input type="email" class="form-control" name="email" aria-describedby="emailHelp" autocomplete="off" autofocus="autofocus" placeholder="Email" required>
      </div>

      <div class="form-group">        
        <input type="password" class="form-control" name="password" aria-describedby="emailHelp" autocomplete="off" autofocus="autofocus" placeholder="Password" required>
      </div>   

    <div class="form-group">  
    <select name="activo"  id="activo" class="form-control" required> 
    <option value="" selected ="true" disabled>Status</option>
        <option value="1">Active</option>
        <option value="'0'">Inactive</option>
    </select>  
    </div>
    <div class="form-group"> 
    </div>

   

      <button type="submit" class="btn btn-primary btn-block sombra">Register</button>
    </form>   
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-times"></i> Close</button>
        </div>
        
      </div>
    </div>
  </div>
<!--****************************************fin del modal**************************************************************-->



<!--************************************************modal editar para modificar******************************************-->
<!-- The Modal22222 -->
  <div class="modal fade" id="myModal2">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title"><i class="fas fa-edit text-primary" ></i> Edit User</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <form action="" method="post">

            <input type="hidden" id="id2" name="id" value="">

            <div class="form-group">
            <label>Email</label>                
            <input type="email" class="form-control" autofocus="autofocus" id="correo2" name="email" autocomplete="off" aria-describedby="emailHelp"  required  >
            </div>         
                      
            <button type="submit" class="btn btn-primary btn-block sombra">Update</button>

          </form> 
        </div>

        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-times"></i> Cerrar</button>
        </div>
        
      </div>
    </div>
  </div>
<!--*************************************************Fin de modal2**********************************************************-->


</div>




</section>    


<script src="public/js/popper.min.js"></script>
<script src="public/js/bootstrap.min.js"></script>
</body>
</html>
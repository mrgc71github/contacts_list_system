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
    <title>Contacts List</title>
    
  <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap y y algunos estilo CSS aparte -->
    <link rel="stylesheet" href="public/css/bootstrap.min.css">
        <link rel="stylesheet" href="public/css/all.min.css">
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
          $('#datatable').DataTable({
            "ordering" : true
          });

      } );
    </script>
  <!--********************************************************-->

    






<?php

    if(isset($_POST['id'])){
      $first_name=$_POST['first_name'];
      $last_name=$_POST['last_name'];
      $email=$_POST['email'];
      $contact_number=$_POST['contact_number'];

      $result=registerContact($first_name,$last_name,$email,$contact_number);

      if ($result==true) {
        ?>
        <script>
          Swal.fire(
          'Successfull',
          'Contact created!',
          'success'
                   ).then(function () {
          window.location.href = "contacts.php";
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
            text: "Contact not registered",
            type: "error",
                    }).then(function () {
            window.location.href = "contacts.php";
          }, function (dismiss) {
            if (dismiss === 'cancel') {
            }
          }); 
          </script>

        <?php
      }


    }



    if(isset($_POST['id2'])){
      $id=$_POST['id2'];
      $first_name=$_POST['first_name2'];
      $last_name=$_POST['last_name2'];
      $email=$_POST['email2'];
      $contact_number=$_POST['contact_number2'];

      $result=editContact($id,$first_name,$last_name,$email,$contact_number);

      if ($result==true) {
        ?>
        <script>
          Swal.fire(
          'Successfull',
          'Contact updated!',
          'success'
                   ).then(function () {
          window.location.href = "contacts.php";
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
            text: "Contact not updated",
            type: "error",
                    }).then(function () {
            window.location.href = "contacts.php";
          }, function (dismiss) {
            if (dismiss === 'cancel') {
            }
          }); 
          </script>

        <?php
      }


    }
?>
  
    


  </head>
  
  <body>



  <?php
  //include 'conn.php';
  ?>

  <section class="espaciado">

<a href="users.php" class="btn btn-lg btn-info">Users</a>&nbsp;&nbsp;&nbsp;
<button class="btn btn-lg btn-success" data-toggle="modal"  data-target="#myModal" data-controls-modal="myModal" data-backdrop="static" data-keyboard="false">Add Contact</button>
<div style="float: right;">
  <a href="logout.php" class="btn btn-lg btn-info">Log out</a>
  </div>
<?php
  $sql="select * from contacts.contacts order by email ASC";
  $query=mysqli_query($conn,$sql);
  if(!mysqli_query($conn, $sql)){
    echo mysqli_error($conn);
  }
?>
<br><br><br>

<div class="ml-3 mr-3">

<br>
<div class="col-sm-6">

</div>



<table class="table table-striped mb-none" id="datatable">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>                        
                        <th>Contact Number</th>
                        <th></th>
                      </tr>
                    </thead>
                        
                    <tbody>                 


                      <?php
                        $resumen=array();
                        foreach ($query as $registros){ 

                           $id = $registros['id'];
                           $expediente='V0-'.str_pad($id, 5, "0", STR_PAD_LEFT);   


                           $resumen[$registros['id']]=array();
                           $campos=array('id','first_name','last_name','email','contact_number');
                           foreach ($campos as $campo) {
                               $resumen[$registros['id']][$campo]=$registros[$campo];
                           }
                      ?>
                         
                      <tr>
                        <td><?php echo $registros['first_name']; ?></td>                 
                        
                        <td><?php echo $registros['last_name'];?></td>
                        <td><?php echo $registros['email'];?></td>
                        <td><?php echo $registros['contact_number'];?></td>
                        <td>
                          <a href="#" onclick="asignarValores(<?php echo $registros['id'] ?>)" class="btn  btn-outline-primary btn-sm"   data-toggle="modal"  data-target="#myModal2" data-controls-modal="myModal2" data-backdrop="static" data-keyboard="false"><i class="fa fa-edit"></i> Edit</a>
                        </td>

                        

                      </tr>
                      <?php
                        }
                        $informacion=json_encode($resumen);
                        ?>
                        <script type="text/javascript">
                          var resumen=<?php echo $informacion ?>;
                        </script>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>                        
                        <th>Contact Number</th>
                        <th></th>
                      </tr>
                    </tfoot>
                  </table>
</div>



<div class="">



  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title"><i class="fas fa-edit text-primary" ></i> Add Contat</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
        <form action="" method="post">

        <input type="hidden" id="id" name="id" value="">
        <input type="hidden" name="new" value="1">

         <div class="form-group"> 
            <label>First Name</label>
            <input type="text" name="first_name" required="" class="form-control">
        </div>

        <div class="form-group"> 
            <label>Last Name</label>
            <input type="text" name="last_name" required="" class="form-control">
        </div>

        <div class="form-group"> 
          <label>Email</label>
          <input type="text" name="email" required="" class="form-control">
      </div>

      <div class="form-group"> 
          <label>Contact Number</label>
          <input type="text" name="contact_number" required="" class="form-control">
      </div>
          
          
      <button type="submit" class="btn btn-primary btn-block sombra">Add</button>

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
          <h4 class="modal-title"><i class="fas fa-edit text-primary" ></i> Edit Contat</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
        <form action="" method="post">

        <input type="hidden" id="id2" name="id2" value="">
        <input type="hidden" name="edit" value="1">

         <div class="form-group"> 
            <label>First Name</label>
            <input type="text" name="first_name2" id="first_name2" required="" class="form-control">
        </div>

        <div class="form-group"> 
            <label>Last Name</label>
            <input type="text" name="last_name2" id="last_name2" required="" class="form-control">
        </div>

        <div class="form-group"> 
          <label>Email</label>
          <input type="email" name="email2" id="email2" required="" class="form-control">
      </div>

      <div class="form-group"> 
          <label>Contact Number</label>
          <input type="text" name="contact_number2" id="contact_number2" required="" class="form-control">
      </div>
          
          
      <button type="submit" class="btn btn-primary btn-block sombra">Edit</button>

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


<script type="text/javascript">

  function asignarValores(id){
    document.getElementById("id2").value=id;
    var registro=resumen[id];
    document.getElementById("id2").value=registro['id'];
    document.getElementById("first_name2").value=registro['first_name'];
    document.getElementById("last_name2").value=registro['last_name'];
    document.getElementById("email2").value=registro['email'];
    document.getElementById("contact_number2").value=registro['contact_number'];

  }

</script>

</body>
</html>
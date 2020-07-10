<!doctype html>
<html lang="en">
  <head>
    <title>Contacts List System</title>
	
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no shrink-to-fit=no">

    <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="public/css/bootstrap.min.css">
        <link rel="stylesheet" href="public/css/all.min.css">
        <link rel="stylesheet" href="public/css/custom.css">
  </head>

  <body>
 
		<div class="container-fluid">
			<div class="row" style="margin-top:8%;" >

				<div class="col-lg-12">	
	
					<div class="card">

						<div class="loginBox">	                  
			 
		 					<h2>Login</h2>

		 						<form action="check-login.php" method="post" autocomplete="off">
                          	
									<div class="form-group">
										 <div class="input-group">
						                    <div class="input-group-prepend">
						                      <span class="input-group-text bg-dark text-white"><i class="fas fa-user-tie" aria-hidden="true"></i></span>
						                    </div>
											<input type="text" class="form-control input-lg" name="email" autofocus="autofocus" autocomplete="off" placeholder="Email" required>        
											</div>
					                </div>



							
									<div class="form-group">
							                <div class="input-group">
							                    <div class="input-group-prepend">
							                      <span class="input-group-text bg-dark text-white"><i class="fa fa-key" aria-hidden="true"></i></span>
							                    </div>
								                <input type="password" class="form-control input-lg" name="password" placeholder="Password" required>       
										</div>	
							                </div>	

														    
									<button type="submit" class="btn btn-info btn-block">Login</button>

								</form>

							<p><a href="#showForm" data-toggle="collapse" aria-expanded="false" aria-controls="collapse" title="Recuperar Clave">Forgot your password?</a></p>	
							<div class="collapse" id="showForm">
								<div class='well'>
									<form action="password-recovery.php" method="post">
										<div class="form-group">										
											<input type="email" autocomplete="off" class="form-control" name="email" placeholder="E-mail" required>
										</div>
										<button type="submit" class="btn btn-warning">Recover Password</button>
									</form>								
								</div>
							</div>
													
							<hr>								
						</div>
					</div>
				</div>
			</div>
		</div><


        <script src="public/js/jquery-3.2.1.slim.min.js"></script>
		<script src="public/js/popper.min.js"></script>
		<script src="public/js/bootstrap.min.js"></script>
	
	</body>
</html>	
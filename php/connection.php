<?php

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	require 'PHPMailer/Exception.php';
	require 'PHPMailer/PHPMailer.php';
	require 'PHPMailer/SMTP.php';

	
	function conectarBD(){
        $conexion= mysqli_connect("localhost","root","","");
        $sql = "set names 'utf8';";
        $codificacion=mysqli_query($conexion,$sql);
        return $conexion;
    }


    function registerContact($first_name,$last_name,$email,$contact_number){
    	$conn=conectarBD();

    	$sql="Insert into contacts.contacts(first_name,last_name,email,contact_number) values ('".$first_name."','".$last_name."','".$email."','".$contact_number."')";

    	if(mysqli_query($conn,$sql)) {
    		sendEmail($email,"We added you in our contact list. Thank you.");
    		return true;
    	} else {
    		echo mysqli_error($conn);
    		return false;
    	}
    }


    function editContact($id,$first_name,$last_name,$email,$contact_number){
    	$conn=conectarBD();

    	$sql="Update contacts.contacts set first_name='".$first_name."', last_name='".$last_name."' ,email='".$email."' ,contact_number='".$contact_number."' where id=$id";

    	if(mysqli_query($conn,$sql)) {
    		return true;
    	} else {
    		return false;
    	}
    }

    function registerUser($email,$password,$activo){
    	$conn=conectarBD();
		$password     = md5($_POST['password']);
		$query = "INSERT INTO contacts.users (email,password,activo) VALUES ('$email','$password','$activo')";
		if (mysqli_query($conn, $query)) {
			return true;
		} else {
			return false;
		}
    }

    function editUser($id,$email,$password,$activo){
    	$conn=conectarBD();
    	$password=md5($password);

    	$sql="Update contacts.contacts set email='".$email."', password='".$password."' ,email='".$email."' ,activo='".$activo."' where id=$id";

    	if(mysqli_query($conn,$sql)) {
    		return true;
    	} else {
    		return false;
    	}
    }


    function sendEmail($email,$message){
   
    	$host= ""; // Your host email domain
    	$nick= ""; // Your email sender adress
    	$pass= ""; // Your email sener password
      	$mail = new PHPMailer(true);

      try{

        $mail->SMTPDebug = 0;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host       = $host;             // Specify main and backup SMTP servers
        $mail->SMTPAuth   =  true;                            // Enable SMTP authentication
        $mail->Username   = $nick;   // SMTP username
        $mail->Password   = $pass;                   // SMTP password
        $mail->SMTPSecure = 'SSL/TLS';                        // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587;                                   // TCP port to connect to
 
        $mail->SMTPOptions              = array(
                    'ssl'               => array(
                    'verify_peer'       => false,
                    'verify_peer_name'  => false,
                    'allow_self_signed' => true
                    )
                );


         //Recipients




         $mail->setFrom($nick, 'Contacts List System');
  


          $mail->addAddress($email, '');

         // Content
         $mail->isHTML(true);                                  
         $mail->Subject = 'Contact List System.';
         $mail->Body =$message;

       if($mail->send()){
       		return true;

       }else{
        	return false;          
       }

      } catch (Exception $e) {
      	$mail->ErrorInfo;
      	return false;
      }
    }

?>
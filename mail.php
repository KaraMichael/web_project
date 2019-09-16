<?php
  function fatalErrorHandler() {
    # Getting last error
    $error = error_get_last();
    # Checking if last error is a fatal error
    if(($error['type'] === E_ERROR) || ($error['type'] === E_USER_ERROR)|| ($error['type'] === E_USER_NOTICE)) {
    # Here we handle the error, displaying HTML, logging, ...
    echo "ERRORnr : " . $error['type']. " |Msg : ".$error['message']." |File : ".$error['file']. " |Line : " . $error['line'];
        }else {
        echo "no error where found " ;
    
        }
    }
    
  # Registering shutdown function
  register_shutdown_function('fatalErrorHandler');

  if($_POST["NameF"] != "" && $_POST["EmailF"] != "" && $_POST["MessageF"] != "")
  {

    $name = $_POST["NameF"];
    $email = $_POST["EmailF"];
    $nachricht = $_POST["MessageF"];
    $betreff = $_POST["SubjectF"];

    $headers   = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/plain; charset=utf-8";
    $headers[] = "From: Kontaktformular Website <contact@info.ch>";
	  $headers[] = "To: Michael Kara <michael.kara@hotmail.com>";
    $headers[] = "Reply-To: ".$email;
    $headers[] = "X-Mailer: PHP/".phpversion();

    $precontent = "
------------------------------------ Kontaktinfo ---------------------------------------

Name: ".$name."
E-Mail: ".$email."
Betreff: ".$betreff."

-------------------------------------- Nachricht ---------------------------------------

";

    $sent = mail('', "Kotaktaufnahme: ".$betreff." - ".$name, $precontent.$nachricht, implode("\r\n", $headers));
    var_dump($sent);
    var_dump(error_get_last());
    echo "check=ok";
    } else {
          echo "check=failure";
    }


?>

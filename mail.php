<?php
  if($_POST["NameF"] != "" && $_POST["EmailF"] != "" && $_POST["MessageF"] != "")
  {

    $name = $_POST["NameF"];
    $email = $_POST["EmailF"];
    $nachricht = $_POST["MessageF"];
    $betreff = $_POST["SubjectF"];

    $headers   = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/plain; charset=utf-8";
    $headers[] = "From: Contact Form Website <contact@michaelkara.ch>";
	  $headers[] = "To: Michael Kara <michael.kara@webrepublic.ch>";
    $headers[] = "Reply-To: ".$email;
    $headers[] = "X-Mailer: PHP/".phpversion();

    $precontent = "
------------------------------------ Contact Info ---------------------------------------

Name: ".$name."
E-Mail: ".$email."
Subject: ".$betreff."

-------------------------------------- Message ---------------------------------------

";

    $sent = mail('', "Kotaktaufnahme: ".$betreff." - ".$name, $precontent.$nachricht, implode("\r\n", $headers));
    if($sent){
      echo "check=ok";
    }
    else{
      echo "check=failure";
    }
}
    
else {
      echo "check=failure";
}


?>

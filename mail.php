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
    $headers[] = "From: Kontaktformular Website <contact@info.ch>";
    //$headers[] = "To: Info <info@coatchecker.ch>, Alexander Bleuler <a.bleuler@coatchecker.ch>, Techsupport <techsupport@coatchecker.ch>";
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

    mail('', "Kotaktaufnahme: ".$betreff." - ".$name, $precontent.$nachricht, implode("\r\n", $headers));


    echo "check=ok";
  } else {
    echo "check=failure";
  }

?>

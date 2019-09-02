<?php

  if($_POST["Name"] != "" && $_POST["Email"] != "" && $_POST["nachricht"] != "")
  {

    $name = $_POST["Name"];
    $email = $_POST["email"];
    $nachricht = $_POST["nachricht"];
    $anrede = $_POST["anrede"];
    $vorname = $_POST["vorname"];
    $organisation = $_POST["organisation"];
    $telefon = $_POST["tel"];
    $betreff = $_POST["betreff"];

    $headers   = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/plain; charset=utf-8";
    $headers[] = "From: Kontaktformular Website <kontakt@coatchecker.ch>";
    //$headers[] = "To: Info <info@coatchecker.ch>, Alexander Bleuler <a.bleuler@coatchecker.ch>, Techsupport <techsupport@coatchecker.ch>";
	$headers[] = "To: Info <info@coatchecker.ch>";
    $headers[] = "Reply-To: ".$email;
    $headers[] = "X-Mailer: PHP/".phpversion();

    $precontent = "
------------------------------------ Kontaktinfo ---------------------------------------

Anrede: ".$anrede."
Vorname: ".$vorname."
Name: ".$name."
E-Mail: ".$email."
Telefon: ".$telefon."
Organisation: ".$organisation."

-------------------------------------- Nachricht ---------------------------------------

";

    mail('', "Kotaktaufnahme: ".$betreff." - ".$name, $precontent.$nachricht, implode("\r\n", $headers));


    echo "check=ok";
  } else {
    echo "check=failure";
  }

?>

<?php
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];

/*$header = 'From: ' . $mail . " \r\n";*/
$header = 'From: noreply@autolife.mx' . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name .   $lastname . " \r\n";
$message .= "Su mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'soporte@amsamex.com.mx';
$asunto = 'Desde web autolife';

$mail = mail($para, $asunto, utf8_decode($message), $header);

if ($mail) {
    header('Refresh: .1; URL=index.html');
    echo "<script>alert('Correo enviado, gracias.');</script>";
}
?>
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Validar los datos del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name']);
    $lastname = trim($_POST['lastname']);
    $mail = filter_var(trim($_POST['mail']), FILTER_VALIDATE_EMAIL);
    $phone = trim($_POST['phone']);
    $message = trim($_POST['message']);

    if (empty($name) || empty($mail) || empty($message)) {
        echo "<script>alert('Todos los campos son obligatorios');</script>";
        exit();
    }

    if (!$mail) {
        echo "<script>alert('Ingrese un correo electrónico válido');</script>";
        exit();
    }

    // Verificar la respuesta de reCAPTCHA
    $secret_key = '6Lebtw4lAAAAAHf8kJ2Ud5TZL45UMWeEBJ1h0o6H';
    $response = $_POST['g-recaptcha-response'];
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = array(
        'secret' => $secret_key,
        'response' => $response
    );

    $options = array(
        'http' => array(
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $result_json = json_decode($result);

    if (!$result_json->success) {
        echo "<script>alert('Por favor, verifica que no eres un robot.');</script>";
        exit();
    }

    // Codificar los datos para evitar la inyección de código malicioso
    $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $lastname = htmlspecialchars($lastname, ENT_QUOTES, 'UTF-8');
    $mail = htmlspecialchars($mail, ENT_QUOTES, 'UTF-8');
    $phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

    // Configurar los encabezados del correo
    $headers = array(
        'From' => 'noreply@autolife.mx',
        'X-Mailer' => 'PHP/' . phpversion(),
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/html'
    );

    // Enviar el correo usando PHPMailer

    $mail = new PHPMailer(true);

    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Send using SMTP
    $mail->Host = 'secure.emailsrvr.com';                 // Set the SMTP server to send through
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'correo@tuxxxx.com';                // SMTP username
    $mail->Password = 'siaja';                            // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable SSL encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('noreply@autolife.mx', 'WEB form');
    $mail->addAddress('developerbenjaminar@gmail.com', 'Emplead@');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contacto desde la pagina web AUTOLIFE';
    $mail->Body    = 'Nombre: ' . $_POST['name'] . '<br>' . 'Apellidos: ' . $_POST['lastname'] . '<br>' . 'Correo electrónico: ' . $_POST['mail'] . '<br>' . 'Teléfono: ' . $_POST['phone'] . '<br>' . 'Mensaje: ' . $_POST['message'];
    $mail->AltBody = 'Este es el cuerpo en texto plano para clientes de correo que no admiten HTML';

    $mail->send();

    // Mostrar mensaje de éxito y regresar a index

    if ($mail) {
        header('Refresh: .1; URL=index.html');
        echo "<script>alert('Correo enviado, gracias.');</script>";
    }
}

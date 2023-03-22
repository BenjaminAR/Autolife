<?php

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


    /*$header = 'From: ' . $mail . " \r\n";*/
    $header = 'From: noreply@autolife.mx' . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/html";

    $message = "Este mensaje fue enviado por: " . $name . " " . $lastname . "\r\n";
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
}

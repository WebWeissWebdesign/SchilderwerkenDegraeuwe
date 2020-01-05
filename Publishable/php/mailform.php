<?php 

    #user input
    $naam = $_POST['naam'];
    $email = $_POST['email'];
    $onderwerp = $_POST['onderwerp'];
    $bericht = $_POST['bericht'];
    
    function filter_email_header($form_field) {
        return preg_replace('/[\0\n\r\|\!\/\<\>\^\$\%\*\&]+/','',$form_field);
    }

    function create_message ($naam, $email, $onderwerp, $bericht){
        return $message = strval($naam)." heeft een bericht ingediend met als onderwerp ".strval($onderwerp)." dit is het bericht: ".strval($bericht);
    };
        
    $email = filter_email_header($email);
    $bericht = create_message($naam, $email, $onderwerp, $bericht);

    $headers = "From: $email\n";
    $sent = mail('contact.senneweiss@gmail.com', 'Contactformulier', $bericht, $headers);
        
    if ($sent) {
        header("Location: ../index.html");
        } else {
        ?><html>
        <head>
        <title>Er ging iets mis</title>
        </head>
        <body>
        <h1>Er ging iets mis</h1>
        <p>Er ging iets mis in het proces. Probeer later opnieuw.</p>
        </body>
        </html>
        <?php
        header("Location: ../index.html");
    }
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sem título</title>

<style type="text/css">
<!--
body {
	font-family:Arial, Helvetica, sans-serif;
	font-size:14px;
	margin-left: 10px;
}

a { 
	text-decoration:none;
	font-family:Arial, Helvetica, sans-serif;
	font-size:14px;
	color:#09C;
}


a:hover {
	text-decoration:underline;
	font-family:Arial, Helvetica, sans-serif;
	font-size:14px;
	color:#000;
}




-->
</style>
</head>

<body>
<p><span class="titulos">

  <?php
//pega as variaveis por POST
$nome          = $_POST["nome"];
$email         = $_POST["email"];
$assunto       = $_POST["assunto"];
$mensagem      = $_POST["mensagem"];
$data          = date("d/m/y");                     
$hora          = date("H:i");                      
$emailcliente1 = "contato@coopstarexpress.com.br"; // este e-mail tem que ser da hospedagem
$emailcliente2 = "torres.design@hotmail.com"; // este por ser um hotmail, yahoo, gmail etc...

//global $email; //função para validar a variável $email no script todo


mail($emailcliente1,        
      "$assunto",
      "Nome: $nome\nE-mail: $email\nAssunto: $assunto\nMensagem: $mensagem\nData: $data\nHora: $hora",
      "From: $email"
     );	 

mail($emailcliente2,        
      "$assunto",
      "Nome: $nome\nE-mail: $email\nAssunto: $assunto\nMensagem: $mensagem\nData: $data\nHora: $hora",
      "From: $email"
     );
	 


	 
echo "<center>Mensagem enviada com sucesso!<br/>Agradecemos.<br/><a href=formulario.html>Voltar</a></center></p>";

?>
</span></p>
</body>
</html>

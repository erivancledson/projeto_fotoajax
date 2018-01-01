<?php
//pega o arquivo que eu estou enviando
if(isset($_FILES['foto'])) {

	$arquivo = $_FILES['foto'];
	//coloca a foto na pasta de destino
	move_uploaded_file($arquivo['tmp_name'], 'fotos/'.$arquivo['name']);

	echo "Arquivo de ".$_POST['nome']." enviado com sucesso!";

}

?>
$(function(){
    
	$('button').on('click', function(){
		var data = new FormData();
         //pega o id da foto
		var arquivos = $('#foto')[0].files;
          //verifica se tem arquivos selecionados
		if(arquivos.length > 0) {
            //adicionar no form data o nome e a foto
			data.append('nome', $('#nome').val());

			data.append('foto', arquivos[0]);

			$.ajax({
				type:'POST',
				url:'recebedor.php',
				data:data,
				contentType:false,
				processData:false,
				success:function(msg){
					alert(msg);
				}
			});
		}
	});

});
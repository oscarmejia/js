$(document).ready(function(){
	$('.add').click(function(){
		var nombre=$(this).parents("tr").find(".npro").html();
		var precio=$(this).parents("tr").find(".ppro").html();
		var cantidad=$(this).parents("tr").find("#cantidad").val();
		cantidad=parseInt(cantidad);
		
		// alert(nombre+precio+cantidad);
		var html="<tr><td>"+nombre+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td><button class='btn btn-danger eliminar'><span class='glyphicon glyphicon-trash'></span></button></td></tr>"
		$('#newtable').html(html);

		$('.eliminar').click(function(){
			$(this).parents("tr").remove();
		});
	});

	

	$('.menos').click(function(){
		var menos =$('.cantidad').val();
		menos=parseInt(menos);
		$('.cantidad').val(menos-1);

	});

	$('.mas').click(function(){
		var mas	 =$('.cantidad').val();
		mas=parseInt(mas);
		$('.cantidad').val(mas+1);

	});

});
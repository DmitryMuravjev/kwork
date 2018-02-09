$(document).ready(function () {
	$(".forma1").validate({
			rules: {
        name: {
          required: true
        },
                phone: {
          required: true
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "send.php", 
			data: $(".forma1").serialize(), 
			success: function(html)
			{		
				window.location.href = 'form-ok.php';
				//$('#t').modal('toggle');
			} 
			}); 
			return false;
		}
	});	

});

$(document).ready(function () {
	$(".forma2").validate({
			rules: {
        name: {
          required: true
        },
                phone: {
          required: true
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "send.php", 
			data: $(".forma2").serialize(), 
			success: function(html)
			{	
			window.location.href = 'form-ok.php';		
				//$('#t').modal('toggle');
			} 
			}); 
			return false;
		}
	});	

});

$(document).ready(function () {
	$(".modalf").validate({
			rules: {
        name: {
          required: true
        },
                phone: {
          required: true
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "send.php", 
			data: $(".modalf").serialize(), 
			success: function(html)
			{	
				window.location.href = 'form-ok.php';
               // $('#mainm').modal('toggle');
				//$('#t').modal('toggle');
			} 
			}); 
			return false;
		}
	});	

});

$(document).ready(function () {
	$(".qu").validate({
			rules: {
        name: {
          required: true
        },
                phone: {
          required: true
        }
      },
			submitHandler: function(form) {
			$.ajax({
			type: "POST", 
			url: "qu.php", 
			data: $(".qu").serialize(), 
			success: function(html)
			{		
            window.location.href = 'form-ok.php';    
				//$('#t').modal('toggle');
			} 
			}); 
			return false;
		}
	});	

});





$( ".calc-next1" ).click(function() {
  $( ".sag2" ).removeClass('noshowable');
    $( ".sag1" ).addClass('noshowable');
});


$( ".calc-next2" ).click(function() {
  $( ".sag3" ).removeClass('noshowable');
    $( ".sag2" ).addClass('noshowable');
});





    
    	$(".calc-next22").click(function() {
		$(".dangerit").show();
		
	});

$(".calc-next2").hide();
$('input#upload-btn[type=file]').change(function() { 
    // select the form and submit
    $('.calc-next2').addClass('etopont'); 
    $(".calc-next22").hide();
    $(".calc-next2").show();
    $(".dangerit").hide();
});



$( ".calc-prev2" ).click(function() {
  $( ".sag1" ).removeClass('noshowable');
    $( ".sag2" ).addClass('noshowable');
});
$( ".calc-prev3" ).click(function() {
  $( ".sag2" ).removeClass('noshowable');
    $( ".sag3" ).addClass('noshowable');
});



   var text=$('.summa').html();

   $('#form__summa').val(text);




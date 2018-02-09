$(document).ready(function() {

	var recalculate = function() {
		var sum = 0;

		$(':checkbox:checked, :radio:checked').each(function (i, el) {
			sum += (cVal = parseFloat($(el).attr('data-price'))) && !isNaN(cVal) ? cVal : 0;
		});		

		$('.summa').html(sum + '<i> грн.</i>');
		var form__summa = $('.summa').html();
        var suma = sum;
        $('#form__summa').val(suma);
	};
	$(':checkbox, :radio').on('change', function() { recalculate(); });

	






	$("#s1").click(function() {
		$(".calc-girl div").removeClass();
		$(".calc-girl div").addClass("girl-one");
	});
    
    	

    
    
    
	$("#s2").click(function() {
		$(".calc-girl div").removeClass();
		$(".calc-girl div").addClass("girl-two");
	});

	$("#s3").click(function() {
		$(".calc-girl div").removeClass();
		$(".calc-girl div").addClass("girl-three");
	});

	$("#s4").click(function() {
		$(".calc-girl div").removeClass();
		$(".calc-girl div").addClass("girl-four");
	});

	$("#s5").click(function() {
		$(".calc-girl div").removeClass();
		$(".calc-girl div").addClass("girl-five");
	});

	/**
 * Return true if the field value matches the given format RegExp
 *
 * @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
 * @result true
 *
 * @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
 * @result false
 *
 * @name $.validator.methods.pattern
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */

 (function(document, window, index) {
 	var inputs = document.querySelectorAll('.inputfile');
 	Array.prototype.forEach.call(inputs, function(input) {
 		var label = input.nextElementSibling,
 		labelVal = label.innerHTML;

 		input.addEventListener('change', function(e) {
 			var fileName = '';
 			if (this.files && this.files.length > 1)
 				fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
 			else
 				fileName = e.target.value.split('\\').pop();

 			if (fileName)
 				label.querySelector('span').innerHTML = fileName;
 			else
 				label.innerHTML = labelVal;
 		});

		// Firefox bug fix
		input.addEventListener('focus', function() {
			input.classList.add('has-focus');
		});
		input.addEventListener('blur', function() {
			input.classList.remove('has-focus');
		});
	});
 }(document, window, 0));

});




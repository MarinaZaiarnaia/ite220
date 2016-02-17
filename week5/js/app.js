$(function(){
	var app = {
		init: function() {
			app.init_effect();
			app.init_event();
		},

		init_effect: function() { 
			$("#head_tagline").height(200);
			$("#head_tagline>h1").hide().fadeIn(700);
			$("#head_tagline>p:first").hide().delay(700).fadeIn(700);
			$("#head_tagline>p:last").hide();
			$("#head_tagline>a").hide().delay(1400).fadeIn(700);
			$(".error").hide();
		},

		init_event: function() {
			$("#head_tagline>a:first").on("click", function(){
			$("#head_tagline>p:last").fadeIn(700);
			$("#head_tagline").height(320);
		});
			$("#head_tagline>a:last").on("click", function(){
			$("#head_tagline>p:last").hide();
			$("#head_tagline").height(200);
		
		});
			$("#form-submit").on("click", function(){
				var phone = $("#form-number").val();
				if (!$.isNumeric(phone)) {
					$(".error:first").show();
				}
				else{
					$(".error:first").hide();
				}
				
				var mes = $("#form-message").val();
					mes = mes.toLowerCase();
					if (!(mes.indexOf("badwords") == -1)) {
						$(".error:last").show();
					}
					
					else if (!(mes.indexOf("bad words") == -1)) {
						$(".error:last").show();
					}
					else {
						$(".error:last").hide();
					}
				
		
				function sendMail() {
					swal({
						title: "Yay!",
						text: "Successfully send email message"
						
					});

					$(".form-with-error").val('');
					$("#form-name").val('');
				}
								
				if ($(".error:first").is(":hidden") && $(".error:last").is(":hidden")) {
					if ($("#form-message").val() == '') {
						swal("You didnt write a message!")
					} 
					else {
						if ($("#form-name").val() == ''){
							swal("You didn't mention your name!")   
						}
						else {
							sendMail();	
						}
						
					}
				}
			});
		
			$(".image-flip").flip({
			speed: '500',
			trigger: 'click'
			});
		}
	};
	app.init();
});

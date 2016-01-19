// Marina
$(function(){
	$("a").on("click", function(e){
	e.preventDefault();
	//alert(this.text);
	var city = this.text.toLowerCase();
	$.ajax({
		type:'GET',
		url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=2de143494c0b295cca9337e1e96b00e0',
		success: function(data){
			//console.log(data.name);	
			$("#container").html(data.name + ": " + data.main.temp);
			$("#container2").html(data.clouds + ":" + data.wind.speed);
			$("#cButton").on("click", function(temp2){
				var temp2 = celsius(data.main.temp);
				$("#container").html(data.name + ": " + temp2);
			});
			$("#fButton").on("click",function(temp3){
				var temp3 = fahrenheit(data.main.temp);
				$("#container").html(data.name + ": " + temp3);
			});
		}
		});	
	});


function celsius(temp) {
    var convert;
    convert = (temp - 273.15);
    return convert;
}

function fahrenheit(temp) {

    var convert;
    convert = ((temp * 9.0 / 5.0) - 459.67); 
    return convert;
}

	});

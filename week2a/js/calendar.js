// display the calendar here
var hotelTable = document.getElementById("hotelCalendarTable");
var data = hotelTable.innerHTML;
var stringHTML = "<tr>";
var days = 1;
for( var i = 1; i <= 31; i++ ){
if (days === 8) {
		stringHTML += "</tr><tr>" + "<td>" + i + "</td>" ;
		days = 0; 
	}
	else {
		stringHTML += "<td>" + i + "</td>";
		days++;
	}
}

hotelTable.innerHTML += stringHTML;

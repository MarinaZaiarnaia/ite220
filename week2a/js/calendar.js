// display the calendar here
var hotelCalendarTable = document.getElementById("hotelCalendarTable");
var data = hotelCalendarTable.innerHTML;
var stringHTML = "<tr>";
var days = 0;
for( var i = 1; i <= 31; i++ ){
if (days === 7) {
		stringHTML += "</tr><tr>" + "<td>" + i + "</td>"  ;
		days = 1; 
	}
	else { 
		stringHTML += "<td>" + i + "</td>";
		days++;
	}
}
stringHTML += "</tr>";
hotelCalendarTable.innerHTML += stringHTML;

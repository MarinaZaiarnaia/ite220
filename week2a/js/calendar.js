// display the calendar here
var hotelTable 
	= document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var stringHTML = "<tr>";
var counter = 0;
for (var i = 1; i <=31; i++){
	if (counter ===7){stringHTML += "</tr><tr>" + "<td>" + i + "</td>";
	counter = 1;
	}
	else{
		stringHTML +="<td>" + i + "</td>";
		counter++;
	}
}

stringHTML += "</tr>";

hotelTable.innerHTML += stringHTML;

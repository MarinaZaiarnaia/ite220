var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	width: window.screen.width,
	height: window.screen.height,
	location: window.location.pathname,

	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;
		
		ele = document.getElementById("sy");
		ele.value = this.screenY;
		
		ele = document.getElementById("swidth");
		ele.value = this.width;
		
		ele = document.getElementById("sheight");
		ele.value = this.height;
	}
};


myWindow.render();
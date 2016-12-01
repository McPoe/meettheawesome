var mockup = '<div class="row">' +
				'<div class="col s12 m12 center-align">' +
					'<img src="{{image}}" class="img-profile circle">' +
				'</div>' +
			 '</div>' +
			 '<div class="row">' +
				'<div class="col s12 m12 center-align">' +
					'<h5 class="name">{{name}}</h5>' +
				'</div>' +
			 '</div>';

var cargarPagina = function() {
	$.ajax({
		url: "http://localhost:8000/demo.json",
		type: "GET",
		success: function(response) {
					var params = location.search;
					var pos = params.indexOf("=");
					var data = params.substr(pos + 1);
					$("#information").append(mockup.replace("{{image}}", response.students[data-1].image)
									 			   .replace("{{name}}", response.students[data-1].student));
		},
		error: function(error) {
			console.log(error);
		}
	});
};


$(document).ready(cargarPagina);
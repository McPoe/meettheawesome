var template =  '<div class="container">' +
					'<div class="row">' +
						'<div class="col s5 m5 center-align">' +
							'<img src="{{image}}" class="img-students circle">' +
						'</div>' +
						'<div class="col s7 m7 center-align">' +
							'<h5 class="name">{{name}}</h5>' +
							'<h6 class="name">{{country}}</h6>' +
							'<h6 class="name">{{years}}</h6>' +
							'<i class="material-icons next" data="{{number}}">play_arrow</i>' +
						'</div>' +
					'</div>' +
				'</div>';

var cargarPagina = function() {
	$.ajax({
		url: "http://localhost:8000/demo.json",
		type: "GET",
		success: function(response) {
					for(var i = 0, l = response.students.length; i < l; i++) {
						$("#students").append(template.replace("{{image}}", response.students[i].image)
									 			  	  .replace("{{name}}", response.students[i].student)
									 			      .replace("{{country}}", response.students[i].country)
									 			      .replace("{{years}}", response.students[i].years)
									 			      .replace("{{number}}", i+1));
					}
		},
		error: function(error) {
			console.log(error);
		}
	});
	$("#students").on("click", ".next", irSkills);
};

$(document).ready(cargarPagina);

var irSkills = function() {
	var self = $(this).attr("data");
	$(location).attr("href", "http://localhost:8000/skills.html" + "?data=" + self);
};
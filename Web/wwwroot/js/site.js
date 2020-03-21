// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function BuscaTaxaJuros(url) {

	$.ajax({
		type: "GET",
		url: url,
		cache: false,
		beforeSend: function (data) {

			$("#result1").html("...");
		},
		success: function (data) {

			$("#result1").html(data);

		},
		error: function (jqXHR, exception) {

			$("#result1").html(exception);
		}
	});

}


function CalculaJuros(url) {

	$.ajax({
		type: "GET",
		url: url,
		cache: false,
		beforeSend: function (data) {

			$("#result2").html("...");
		},
		success: function (data) {

			$("#result2").html(data);


		},
		error: function (jqXHR, exception) {

			$("#result2").html(exception);
		}
	});

}



function BuscaRepositorios(url) {

	$.ajax({
		type: "GET",
		url: url,
		cache: false,
		beforeSend: function (data) {

			$("#tabelaGit").hide();
			$("#result3").html("...");
		},
		success: function (data) {

			let html = "";
			let contador = 1;
			$(data).each(function (index, element) {

				html += "<tr><th scope='row'>" + contador + "</th><td>" + $(this)[0].repositorio + "</td><td><a class='btn btn-secondary' href='" + $(this)[0].url + "' target='_blank' role='button'>" + $(this)[0].url + "</a></td></tr>";
				contador++;

			});

			$("#result3").html(html);

			$("#tabelaGit").show();

		},
		error: function (jqXHR, exception) {

			$("#result3").html(exception);
		}
	});

}

$(document).ready(function () {

	$("#btnConsultaTaxaJuros").click(function (arg, e) {

		let Url = $("#UrlApi1").val() + "/taxaJuros";

		BuscaTaxaJuros(Url);

	});

	$("#btnTaxaJuros").click(function (arg, e) {

		let Url = $("#UrlApi2").val() + "/calculajuros/?valorinicial=" + $("#ValorInicial").val() + "&meses=" + $("#Meses").val();

		CalculaJuros(Url);

	});


	$("#btnShowmecode").click(function (arg, e) {

		let Url = $("#UrlApi2").val() + "/showmethecode";

		BuscaRepositorios(Url);

	});
});

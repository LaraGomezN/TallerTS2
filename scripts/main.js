import { series } from './data.js';
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("promedio");
var cardInfo = document.getElementById("cardxd");
mostrarSeries(series);
var promedio = calcularPromedio(series);
promedioTable.textContent = "Seasons average: ".concat(promedio);
var _loop_1 = function (serie) {
    var btnSerie = document.getElementById("".concat(serie.id));
    btnSerie.onclick = function () {
        cardInfo.removeChild(cardInfo.lastChild);
        mostrarInformacion(series, serie.name);
    };
};
for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
    var serie = series_1[_i];
    _loop_1(serie);
}
function mostrarSeries(xd) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, xd_1 = xd; _i < xd_1.length; _i++) {
        var serie = xd_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n            <td><button type=\"button\" id = ").concat(serie.id, " class=\"btn btn-link\">").concat(serie.name, "</button></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function mostrarInformacion(xd, nombre) {
    for (var _i = 0, xd_2 = xd; _i < xd_2.length; _i++) {
        var serie = xd_2[_i];
        if (serie.name == nombre) {
            var trElement = document.createElement("tr");
            trElement.innerHTML = "<div class=\"card\" id=\"cardjaja\">\n                    <img class=\"card-img-top\" src=\"./".concat(serie.id, ".jpeg\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                        <p class=\"card-text\">").concat(serie.description, "</p>\n                        <a href=").concat(serie.link, ">").concat(serie.link, "</a>\n                    </div>\n                    </div>");
            cardInfo.appendChild(trElement);
        }
    }
}
function calcularPromedio(xd) {
    var sumaTemporadas = 0;
    for (var _i = 0, xd_3 = xd; _i < xd_3.length; _i++) {
        var serie = xd_3[_i];
        sumaTemporadas += serie.seasons;
    }
    return Math.round(sumaTemporadas / xd.length);
}

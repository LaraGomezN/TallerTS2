import {Serie} from './serie.js'
import {series} from './data.js'

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTable: HTMLElement = document.getElementById("promedio")!;
let cardInfo: HTMLElement = document.getElementById("cardxd")!;


mostrarSeries(series);
let promedio: number = calcularPromedio(series);
promedioTable.textContent = `Seasons average: ${promedio}`



for (let serie of series){
    let btnSerie: HTMLElement = document.getElementById(`${serie.id}`)!;
    btnSerie.onclick = () => {
        cardInfo.removeChild(cardInfo.lastChild!);
        mostrarInformacion(series, serie.name);   
    }   
}



function mostrarSeries(xd: Serie[]): void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let serie of xd)
        {
            let trElement:HTMLElement = document.createElement("tr");
            trElement.innerHTML = `<td>${serie.id}</td>
            <td><button type="button" id = ${serie.id} class="btn btn-link">${serie.name}</button></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
            seriesTbody.appendChild(trElement);
        }
        seriesTable.appendChild(seriesTbody);

}




function mostrarInformacion(xd: Serie[], nombre:string): void{

    for(let serie of xd)
        {
            if (serie.name == nombre)
                {
                    let trElement: HTMLElement = document.createElement("tr");
                    trElement.innerHTML = `<div class="card" id="cardjaja">
                    <img class="card-img-top" src="./${serie.id}.jpeg">
                    <div class="card-body">
                        <h5 class="card-title">${serie.name}</h5>
                        <p class="card-text">${serie.description}</p>
                        <a href=${serie.link}>${serie.link}</a>
                    </div>
                    </div>`
                    cardInfo.appendChild(trElement)
                }
        }    
}


function calcularPromedio(xd: Serie[]): number{
    let sumaTemporadas:number = 0;
    for(let serie of xd)
        {
            sumaTemporadas+=serie.seasons;
        }
    return Math.round(sumaTemporadas/xd.length);
}


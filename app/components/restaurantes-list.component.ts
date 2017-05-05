// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../models/Restaurante";

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    templateUrl: 'app/views/restaurantes-list.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [RestaurantesService]
})
 

// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesListComponent implements OnInit{ 

	public titulo:String="Lista de Restaurantes";

	public restaurantes:Restaurante[];
	public status:string;
	public errorMessage:string;
	public loading:string;

	constructor (private _restaurantesService:RestaurantesService) {

	}

	ngOnInit () {
		console.log("SERVICE cargado");
		this.loading="show";
		this.getRestaurantes();
	}

	getRestaurantes () {

		//let box_restaurantes=<HTMLElement>document.querySelector(".loading");
		//box_restaurantes.style.visibility="visible";

		this._restaurantesService.getRestaurantes().subscribe(
			result=>{
				this.restaurantes=result.data;
				this.status=result.status;
				if (this.status !=="success") {
					alert ("Error en el servidor");
				} 
				//box_restaurantes.style.display="none";
				this.loading="hide";
				},
			error=>{
				this.errorMessage=<any>error;
				if (this.errorMessage !== null) {
					console.log(this.errorMessage);
					alert("Error en la peticion");
				}
			}
			);
	}



}
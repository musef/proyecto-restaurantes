import {Component, OnInit} from "angular2/core";
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../models/Restaurante";
import {RouteParams} from "angular2/router";

@Component({
	selector:"restaurante-detail",
	templateUrl:"app/views/restaurante-detail.html",
	providers: [RestaurantesService]
	})


export class RestauranteDetailComponent implements OnInit {

	public idRestaurante;
	public status:string;
	public errorMessage: string;
	public restaurante:Restaurante[];

	constructor(
		private _restauranteService:RestaurantesService,
		private _routeParams:RouteParams
		) {

	}

	ngOnInit () {
		this.idRestaurante=this._routeParams.get("id");
		console.log("DETAIL cargado");
		this.getRestaurante();
	}

	getRestaurante () {

		//let box_restaurantes=<HTMLElement>document.querySelector(".loading");
		//box_restaurantes.style.visibility="visible";
		let id = this.idRestaurante;

		this._restauranteService.getRestaurante(id).subscribe(
			response=>{
				this.restaurante=response.data;
				this.status=response.status;
				if (this.status !=="success") {
					alert ("Error en el servidor");
				} 
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
import {Component, OnInit} from "angular2/core";
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../models/Restaurante";
import {RouteParams, Router} from "angular2/router";


@Component({
	selector:"restaurante-detail",
	templateUrl:"app/views/restaurante-add.html",
	providers: [RestaurantesService]
	})


export class RestauranteAddComponent implements OnInit {

	public idRestaurante;
	public status:string;
	public errorMessage: string;
	public restaurante:Restaurante;

	constructor(
		private _restauranteService:RestaurantesService,
		private _routeParams:RouteParams,
		private _route: Router
		) {

	}

	ngOnInit () {
		//this.idRestaurante=this._routeParams.get("id");
		this.restaurante=new Restaurante(0,'','','','null','bajo');
		console.log("Restaurante ADD cargado");
	}
}
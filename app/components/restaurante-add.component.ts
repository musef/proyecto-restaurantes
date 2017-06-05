import {Component, OnInit} from "angular2/core";
import {RestaurantesService} from "../services/restaurantes.service";
import {Restaurante} from "../models/Restaurante";
import {RouteParams, Router} from "angular2/router";


@Component({
	selector:"restaurante-add",
	templateUrl:"app/views/restaurante-add.html",
	providers: [RestaurantesService]
	})


export class RestauranteAddComponent implements OnInit {

	public idRestaurante;
	public status:string;
	public title="Nuevo restaurante cargado";
	public errorMessage: string;
	public restaurante:Restaurante;

	constructor(
		private _restauranteService:RestaurantesService,
		private _routeParams:RouteParams,
		private _route: Router
		) {

	}

	onSubmit() {
		this._restauranteService.addRestaurante(this.restaurante).subscribe(
			response=>{
				this.status=status;
				if (this.status!=='success') alert ('Exito al añadir restaurante');
				},
			error=>{
				this.errorMessage=<any>error;
				if (this.errorMessage !== null) {
					console.log(this.errorMessage);
					alert("Error en la peticion");
				}
			}
		);
		this._route.navigate(['Home']);
	}


	ngOnInit () {
		//this.idRestaurante=this._routeParams.get("id");
		this.restaurante=new Restaurante(0,'','','','null','bajo');
		console.log("Restaurante ADD cargado");
	}

	settingPrice(price) {
		this.restaurante.precio=price;
	}
}
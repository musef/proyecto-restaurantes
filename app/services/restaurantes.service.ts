import {Injectable} from "angular2/core";
import {Http,Response} from "angular2/http";

import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../models/Restaurante";


@Injectable()
export class RestaurantesService {

	constructor (private _http:Http) {

	}

	getRestaurantes () {
		return this._http.get("http://localhost/restaurantes-api/api-rest/restaurantes-api.php/restaurantes")
			.map(res => res.json());
	}

	getRestaurante ($id:string) {
		return this._http.get("http://localhost/restaurantes-api/api-rest/restaurantes-api.php/restaurante/"+$id)
			.map(res => res.json());
	}
}
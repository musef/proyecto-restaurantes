import {Injectable} from "angular2/core";
import {Http,Response,Headers} from "angular2/http";

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

	addRestaurante (restaurante:Restaurante) {
		let json=JSON.stringify(restaurante);
		let params="json="+json;
		let header=new Headers({"Content-Type":"application/x-www-form-urlencoded"});

		return this._http.post("http://localhost/restaurantes-api/api-rest/restaurantes-api.php/restaurantes",
			params,{headers:header}).map(res=>res.json());
	}

	editRestaurante (id:String, restaurante:Restaurante) {
		let json=JSON.stringify(restaurante);
		let params="json="+json;
		let header=new Headers({"Content-Type":"application/x-www-form-urlencoded"});

		return this._http.post("http://localhost/restaurantes-api/api-rest/restaurantes-api.php/update-restaurante/"+id,
			params,{headers:header}).map(res=>res.json());
	}

}
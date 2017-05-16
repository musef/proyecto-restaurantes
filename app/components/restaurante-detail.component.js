System.register(["angular2/core", "../services/restaurantes.service", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, restaurantes_service_1, router_1;
    var RestauranteDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurantes_service_1_1) {
                restaurantes_service_1 = restaurantes_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RestauranteDetailComponent = (function () {
                function RestauranteDetailComponent(_restauranteService, _routeParams, _route) {
                    this._restauranteService = _restauranteService;
                    this._routeParams = _routeParams;
                    this._route = _route;
                }
                RestauranteDetailComponent.prototype.ngOnInit = function () {
                    this.idRestaurante = this._routeParams.get("id");
                    console.log("DETAIL cargado");
                    this.getRestaurante();
                };
                RestauranteDetailComponent.prototype.getRestaurante = function () {
                    var _this = this;
                    //let box_restaurantes=<HTMLElement>document.querySelector(".loading");
                    //box_restaurantes.style.visibility="visible";
                    var id = this.idRestaurante;
                    this._restauranteService.getRestaurante(id).subscribe(function (response) {
                        _this.restaurante = response.data;
                        _this.status = response.status;
                        if (_this.status !== "success") {
                            //alert ("Error en el servidor");
                            _this._route.navigate(["Home"]);
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Error en la peticion");
                        }
                    });
                };
                RestauranteDetailComponent = __decorate([
                    core_1.Component({
                        selector: "restaurante-detail",
                        templateUrl: "app/views/restaurante-detail.html",
                        providers: [restaurantes_service_1.RestaurantesService]
                    }), 
                    __metadata('design:paramtypes', [restaurantes_service_1.RestaurantesService, router_1.RouteParams, router_1.Router])
                ], RestauranteDetailComponent);
                return RestauranteDetailComponent;
            }());
            exports_1("RestauranteDetailComponent", RestauranteDetailComponent);
        }
    }
});
//# sourceMappingURL=restaurante-detail.component.js.map
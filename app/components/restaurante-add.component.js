System.register(["angular2/core", "../services/restaurantes.service", "../models/Restaurante", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, restaurantes_service_1, Restaurante_1, router_1;
    var RestauranteAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurantes_service_1_1) {
                restaurantes_service_1 = restaurantes_service_1_1;
            },
            function (Restaurante_1_1) {
                Restaurante_1 = Restaurante_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RestauranteAddComponent = (function () {
                function RestauranteAddComponent(_restauranteService, _routeParams, _route) {
                    this._restauranteService = _restauranteService;
                    this._routeParams = _routeParams;
                    this._route = _route;
                }
                RestauranteAddComponent.prototype.ngOnInit = function () {
                    //this.idRestaurante=this._routeParams.get("id");
                    this.restaurante = new Restaurante_1.Restaurante(0, '', '', '', 'null', 'bajo');
                    console.log("Restaurante ADD cargado");
                };
                RestauranteAddComponent = __decorate([
                    core_1.Component({
                        selector: "restaurante-detail",
                        templateUrl: "app/views/restaurante-add.html",
                        providers: [restaurantes_service_1.RestaurantesService]
                    }), 
                    __metadata('design:paramtypes', [restaurantes_service_1.RestaurantesService, router_1.RouteParams, router_1.Router])
                ], RestauranteAddComponent);
                return RestauranteAddComponent;
            }());
            exports_1("RestauranteAddComponent", RestauranteAddComponent);
        }
    }
});
//# sourceMappingURL=restaurante-add.component.js.map
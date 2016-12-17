var app = angular.module('basketballApp', ['ngRoute', 'ui.grid', 'ui.grid.selection', 'controllers']);

app.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when("/", { templateUrl: "partials/home.html", controllerAs: "homectrl", controller: "HomeCtrl" })
				  .when("/division", { templateUrl: "partials/division.html", controllerAs: "divctrl", controller: "DivisonCtrl" })
				  .when("/player", {templateUrl: "partials/playerinfo.html", controllerAs: "playerctrl", controller: "PlayerCtrl" })
				  .when("/game", { templateUrl: "partials/gameinfo.html", controllerAs: "gamectrl", controller: "GameCtrl" })
				  .when("/login", { templateUrl: "partials/login.html", controllerAs: "loginctrl", controller: "LoginCtrl" })
				  .when("/register", {templateUrl: "partials/register.html", controllerAs: "registerctrl", controller: "RegisterCtrl" })
				  .otherwise("/404",  { templateUrl: "partials/404.html", controller: "ErrorCtrl"});
	
}]);
var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', ['$scope', MainCtrl]);
controllers.controller('HomeCtrl', ['$scope', HomeCtrl]);
controllers.controller('DivisonCtrl', ['$http', '$scope', DivisionCtrl]);
controllers.controller('PlayerCtrl', ['$http', '$scope', PlayerCtrl]);
controllers.controller('GameCtrl', ['$http', '$scope', GameCtrl]);
controllers.controller('LoginCtrl', ['$http', '$scope', LoginCtrl]);										 
controllers.controller('RegisterCtrl', ['$http', '$scope', RegisterCtrl]);										 
controllers.controller('ErrorCtrl', ['$scope', ErrorCtrl]);
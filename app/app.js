(function () {
    var app = angular.module('core', []);

    app.directive("search", function(){
       return {
           restrict: "A",
           templateUrl: "template/search.tpl",
           controller: "searchController",
           scope: {constrains: '=search'}
           }
    });

    app.controller("searchController", ['$scope', function($scope){
        $scope.types = {'Name':'text', 'Last':'text', 'Date':'date', 'Price':'number'};
        $scope.constrains = [{}];

        $scope.add = function(){
            $scope.constrains.push({});
        }
        $scope.remove = function(index){
            $scope.constrains.splice(index, 1);
        }
        $scope.show = function(){
            console.log($scope.constrains);
        }
    }]);

    app.controller("formController", ['$scope', function($scope){
        $scope.show = function(){
            console.log($scope.abc);
        }
    }]);

})();
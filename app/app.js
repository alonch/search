(function () {
    var app = angular.module('core', []);

    app.directive("search", function(){
       return {
           templateUrl: "/template/search.tpl",
           controller: "searchController"
       }
    });

    app.controller("searchController", function($scope){
        $scope.types = {'Name':'text', 'Last':'text', 'Date':'date', 'Price':'number'};
        $scope.expressions = ['>', '<', '=', '>=', '<=', '!='];
        $scope.constrains = [];
        $scope.add = function(){
            $scope.constrains.push({});
        }
        $scope.remove = function(index){
            $scope.constrains.splice(index, 1);
        }
        $scope.show = function(){
            console.log($scope.constrains);
        }
        $scope.add();
    });
})();
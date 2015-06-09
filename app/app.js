(function () {
    var app = angular.module('core', []);

    app.controller("searchController", function($scope){
        $scope.types = {'Name':'text', 'Last':'text', 'Date':'date', 'Price':'number'};
        $scope.experetions = ['>', '<', '=', '>=', '<=', '!='];
        $scope.constrains = [];
        $scope.add = function(){
            $scope.constrains.push({
                'type':'',
                'exp':'',
                'value':''
            });
        }
        $scope.remove = function(index){
            $scope.constrains.splice(index, 1);
        }
        $scope.add();
        $scope.show = function(){
            console.log($scope.constrains);
        }
    });
})();
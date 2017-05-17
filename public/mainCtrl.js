angular.module('menu')
    .controller('mainCtrl', function($scope, $http) {

        $scope.test = "test";

        $scope.getFood = function() {
            $http.get('/api/food').then(function(response) {
                $scope.foods = response.data;
                console.log(response.data);
            })
        }

        $scope.getFood();

    });

angular.module('menu')
    .controller('mainCtrl', function($scope, $http) {

        $scope.test = "test";

        $scope.getFood = function() {
            $http.get('/api/food').then(function(response) {
                $scope.foods = response.data;
                console.log(response.data);
            })
        }

        $scope.getOneReview = function(foodId, reviewId) {
            console.log(foodId, reviewId);
            $http.get('/api/food/review?foodId=' + foodId + "&reviewId=" + reviewId)
                .then((response) => {
                    console.log(response);
                    $scope.selectedReview = response.data;
                })
        }

        $scope.deleteFood = (foodId) => {
            console.log(foodId);
            $http.delete('/api/food?foodId=' + foodId).then(function(response) {
                console.log(response);
            })
        }

        $scope.getFood();

    });

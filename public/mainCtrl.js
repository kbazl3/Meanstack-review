angular.module('menu')
    .controller('mainCtrl', function($scope, $http) {

        $scope.test = "test";

        $scope.submitReview = () => {
            let reviewObject = {
                color: $scope.foodColor,
                name: $scope.foodName,
                reviews: [{
                    reviewer: $scope.foodReviewer,
                    rating: $scope.foodRating
                }]
            }
            console.log(reviewObject);
            $http.post('/api/food', reviewObject).then((response) => {
                console.log(response.data);
                $scope.getFood();
            })
        }

        $scope.getFood = () => {
            $http.get('/api/food').then((response) => {
                $scope.foods = response.data;
                console.log(response.data);
            })
        }

        $scope.getOneReview = (foodId, reviewId) => {
            $http.get('/api/food/review?foodId=' + foodId + "&reviewId=" + reviewId)
                .then((response) => {
                    console.log(response);
                    $scope.selectedReview = response.data;
                })
        }

        $scope.deleteFood = (foodId) => {
            console.log(foodId);
            $http.delete('/api/food?foodId=' + foodId).then((response) => {
                console.log(response);
            })

            $scope.getFood();
        }

        $scope.getFood();

    });

"use strict";

app.controller('mainCtrl',function($scope,mainFact) {

  $scope.flowerObj = {};

  $scope.getData = () => {
    mainFact.getData()
      .then((data) => {
        for (let i in data) {
          if ($scope.flowerObj[data[i].category]) {
            $scope.flowerObj[data[i].category].push(data[i]);
          } else {
            $scope.flowerObj[data[i].category] = [data[i]];
          }
        }
        console.log($scope.flowerObj)
      }
    )
  }
})

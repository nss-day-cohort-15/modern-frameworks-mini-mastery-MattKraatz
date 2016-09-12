"use strict";

app.controller('mainCtrl',function($scope,mainFact) {

  $scope.flowerArray = [];

  $scope.getData = () => {
    mainFact.getData()
      .then((data) => {
        $scope.flowerArray = data;
      })
  }
})

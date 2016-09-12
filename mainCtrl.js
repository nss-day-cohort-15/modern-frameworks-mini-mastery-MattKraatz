"use strict";

app.controller('mainCtrl',function($scope,mainFact) {

  $scope.flowerArray = [];

  mainFact.getData()
    .then((data) => {
      $scope.flowerArray = data;
    })

})

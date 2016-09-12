"use strict";

app.factory('mainFact',function($http,$q) {

  let getData = () => {
    return $q((resolve, reject) => {
      $http.get('https://flower-power-angular.firebaseio.com/arrangements.json?orderby=category')
        .then((data) => {
          console.log('return from firebase', data.data)
          resolve(data.data);
        }, (error) => {
          console.error(error);
          reject(error);
        })
    })
  }

  return {getData};
})

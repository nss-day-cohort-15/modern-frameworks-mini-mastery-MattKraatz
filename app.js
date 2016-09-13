"use strict";

let app = angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'mainCtrl'
    })
    .otherwise('/')
})

'use strict';

var app = angular.module('routerApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/html/home.html',
    controller: 'homeCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/html/about.html',
    controller: 'aboutCtrl'
  })
  .state('demographics', {
    url: '/demographics/',
    templateUrl: '/html/demographics.html',
    controller: 'demoCtrl',
    resolve: {
      dataObj:
      function(Data) {
        // return a promise which will resolve to the pageObj
        console.log();
        return ;
      }
    }
  })
  .state('taxes', {
    url: '/taxes/',
    templateUrl: '/html/taxes.html',
    controller: 'taxesCtrl',
    resolve: {
      dataObj:
      function() {
        console.log();
       return ;
      }
    }
  })
  .state('spending', {
    url: '/spending/',
    templateUrl: '/html/spending.html',
    controller: 'spendingCtrl',
    resolve: {
      dataObj:
      function() {
        console.log();
       return ;
      }
    }
  })
  .state('explore', {
    url: '/explore/',
    templateUrl: '/html/explore.html',
    controller: 'exploreCtrl',
    resolve: {
      dataObj:
      function() {
        console.log();
       return ;
      }
    }
  })

  $urlRouterProvider.otherwise('/');
});

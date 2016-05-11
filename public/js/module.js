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
  .state('list', {
    url: '/list/:num',
    templateUrl: '/html/list.html',
    controller: 'listCtrl',
    resolve: {
      pageObj:
      function(People, $stateParams) {
        // return a promise which will resolve to the pageObj
        console.log('$stateParams.num in list: ', $stateParams.num );
        return People.getByPage($stateParams.num);
      }
    }
  })
  .state('detail', {
    url: '/detail/:id',
    templateUrl: '/html/detail.html',
    controller: 'detailCtrl',
    resolve: {
      person:
      function(People, $stateParams) {
        console.log('$stateParams in detail: ', $stateParams);
       return People.getById($stateParams.id);
      }
    }
  })

  $urlRouterProvider.otherwise('/');
});

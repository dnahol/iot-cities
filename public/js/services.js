'use strict';

var app = angular.module('routerApp');

app.service('People', function($http, $q) {
  var people;

  this.getByPage = num => {
    // return people by page;
    // var pageUrl = `//swapi.co/api/people/?page=${num}`
    var pageUrl = `https://swapi.co/api/people/?page=${num}`
    return $http({
      method: 'GET',
      url: pageUrl,
      cache: true
    })
    .then(res => {
      return $q.resolve(res.data.results);
    });
  };

  this.getById = id => {
    // returning a promise
    // var personUrl = `//swapi.co/api/people/${id}`
    var personUrl = `https://swapi.co/api/people/${id}`
    return $http({
      method: 'GET',
      url: personUrl,
      cache: true
    })
    .then(res => {
      return $q.resolve(res.data);
    });
  };
});

'use strict';

var app = angular.module('routerApp');

app.controller('navControl', function($scope) {
  $scope.reloadPage= () => {
    console.log('page reload');
    location.reload();



  };
});


app.controller('demoCtrl', function($scope, Data) {

  Data.getData().then(res => {
      $scope.data = res;
    });


})

app.controller('listCtrl', function($scope, $stateParams, $state, pageObj, People) {
  console.log('listCtrl!');
  //$scope.page = [{},{},{},{}] array of person objects on that page
  console.log('pageObj: ', pageObj);
  $scope.num = $stateParams.num;
  $scope.page = pageObj;


  $scope.goToDetail = person => {
    var id = person.url.match(/\d+/g);
    $scope.status = 'Getting your Star Wars character details! One moment!'
    $state.go('detail', {
      id: id
    });
  }
});


app.controller('mainCtrl', function($scope, $state, Data) {

  $scope.getData = function () {
    //userRequest tells us what to show user
    $scope.data = Data.getData($scope.userRequest);
    console.log($scope.data);
  }

});

app.controller('homeCtrl', function($scope) {



});

app.controller('aboutCtrl', function($scope, $state, SweetAlert) {
  console.log('aboutCtrl!');

  $scope.showAlert = () => {
    SweetAlert.swal({
      title: "Are you sure?",
      text: "You want to leave this page and go to the SWAPI page?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, go to SWAPI!",
      closeOnConfirm: true
    }, function(isConfirm) {
      if(isConfirm) {
        window.location.href = 'http://swapi.co/';
      };
    });
  };
});

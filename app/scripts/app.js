(function () {
  'use strict';

  angular.module('auction', ['ngRoute']).config(['$routeProvider',
      function($routeProvider){
          $routeProvider.
              when("/",{
                 templateUrl: "views/home.html",
                  controller: "HomeController"
              }).
              when("/search", {
                  templateUrl: "views/search.html",
                  controller: "SearchController"

              }).
              otherwise({
                  redirectTo: "/"
              });


      }

  ]);
}());

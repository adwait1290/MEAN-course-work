// angular routes is injected into your app as the
// SECOND parameter to angular.module() function
// any additional libraries, such as angular cookies, are injected
// in the same way but separated by commas ['ngRoute', 'ngCookies']
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
  $routeProvider
    // when someone enters a url 'localhost:8000/#/new', load the following partial
    .when('/', {
      templateUrl: 'partials/all.html',
      controller: "FriendController",
      controllerAs: "IC"
    })
    .when('/new', {
      templateUrl: 'partials/new.html',
      controller: 'FriendController',
      controllerAs: 'NC'
    })
    // when someone enters a url 'localhost:8000/#/edit', load the following partial
    // the _id property will be passed into the $routeParams object as long as it's
    // $routeParams is injected
    .when('/edit/:_id', {
      templateUrl: 'partials/edit.html',
      controller: 'EditFriendController',
      controllerAs: 'EC'
    })
    .when('/show/:_id', {
      templateUrl: 'partials/show.html',
      controller: 'ShowFriendController',
      controllerAs: 'SC'
    })
    // when someone uses any other route than above, load the following partial
    .otherwise('/new');
});
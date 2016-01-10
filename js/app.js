var app = angular.module('main', ['ctrls', 'ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "templates/main.html",
      controller: "main.ctrl"
    })
  .when("/about", 
  {
  	templateUrl: "templates/about.html",
  	controller: "about.ctrl"
  })
  .when("/contact", 
  {
  	templateUrl: "templates/contact.html",
  	controller: "contact.ctrl"
  })
  .when("/experience",
  {
  	templateUrl: "templates/experience.html",
  	controller: "experience.ctrl"
  })
  .when("/projects",
  {
  	templateUrl: "templates/projects.html",
  	controller: "projects.ctrl"
  });
});
var joshbulaApp = angular.module('joshbulaApp', ['ngRoute', 'ngAnimate']);
     
joshbulaApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            title: 'Home',
            templateUrl: 'app/views/home.html',
            controller: 'JoshBulaCtrl'
        }).
        when('/skills', {
            title: 'Skills',
            templateUrl: 'app/views/skills.html',
            controller: 'SkillsCtrl'
        }).
        when('/resume', {
            title: 'Resume',
            templateUrl: 'app/views/resume.html',
            controller: "ResumeCtrl"
        }).
         when('/contact', {
             title: 'Contact',
             templateUrl: 'app/views/contact.html',
             controller: "ContactCtrl"
         })
        .otherwise({ redirectTo: '/'});
    }

]);


joshbulaApp.run(function ($rootScope, $timeout, $window) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        $timeout(function () {
            $window.scrollTo(0, 0);
        }, 500);

        $rootScope.title = current.$$route.title;

    });

   
});
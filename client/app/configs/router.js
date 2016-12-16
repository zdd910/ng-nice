'use strict';

angular.module('com.ngnice.app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'controllers/home/home.html',
            controller: 'HomeIndexCtrl as vm'
        })

        $stateProvider.state('notFound', {
            url: '/notFound',
            templateUrl: "controllers/home/notFound.html",
            controller: 'HomeOntFoundCtrl as vm'
        })

        $stateProvider.state('reader', {
            url: '/reader',
            template: '<div ui-view></div>',
            abstract: true
        })


        $stateProvider.state('reader.create', {
            url: '/create',
            templateUrl: 'controllers/reader/create.html',
            controller: 'ReaderCreateCtrl as vm'
        })


        $stateProvider.state('thread', {
            url: '/thread',
            template: "<div ui-view></div>",
            abstract: true
        })

        $stateProvider.state('thread.list', {
            url: '/list',
            templateUrl: 'controllers/thread/list.html',
            controller: 'ThreadListCtrl as vm'
        })


        $urlRouterProvider.otherwise('/notFound');

    })
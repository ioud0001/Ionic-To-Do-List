// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

// File created by Anna Ioudovskaya for HTML5 course
// Description: This project uses bower and ionic to create a to-do list. The data is stored in local storage and can be updated.
// This project also uses vibration
angular.module('starter', ['starter.controllers', 'starter.service', 'ionic', 'ngCordova', 'ngStorage'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('apps', {
    url: '/apps',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('apps.mad9132', {
    url: '/mad9132',
    views: {
      'menuContent': {
        templateUrl: 'templates/mad9132.html',
		 controller: 'mad9132Ctrl'
      }
    }
  })

  .state('apps.mad9133', {
      url: '/mad9133',
      views: {
        'menuContent': {
          templateUrl: 'templates/mad9133.html',
		  controller: 'mad9133Ctrl'
        }
      }
    })
    .state('apps.mad9135', {
      url: '/mad9135',
      views: {
        'menuContent': {
          templateUrl: 'templates/mad9135.html',
          controller: 'mad9135Ctrl'
        	}
	  	}
      })
	  .state('apps.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl'
        }
      }
    });
	//


	$urlRouterProvider.otherwise('/apps/settings');
	/*
	try{
		$urlRouterProvider.otherwise('/apps/mad9138');
	} catch (exception){
		alert(exception);
	}
	*/
	/*
	.state('app.users', {
      url: '/users',
      views: {
        'menuContent': {
          templateUrl: 'templates/users.html',
		  // everything this item needs is in the controller below
          controller: 'UsersCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  */
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/playlists');
});

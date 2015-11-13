// load plugin for cordova
// load plugin for vibration
// to test on device: ionic run android

// File created by Anna Ioudovskaya for HTML5 course
// Description: This project uses bower and ionic to create a to-do list. The data is stored in local storage and can be updated.
// This project also uses vibration

angular.module('starter.controllers', ['ngCordova', 'starter.service', 'ngStorage'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $localStorage, $sessionStorage) {
$scope.instructions = "Add some tasks to your list. Hold down on a task to remove it. Go into the Settings webpage to turn off notifications and vibrate options.";

$scope.clearBtn = "Clear All Tasks";
$scope.addBtn = "Add task";
})
/// ANNA'S CONTROLS
.controller('mad9133Ctrl', function($scope, $stateParams, $localStorage, $cordovaVibration, StorageService){
	$scope.data = {};
	$scope.tasks = [];
			StorageService.setStorageList(courseKey, $scope.tasks);
	console.log("entering mad9133");
	courseKey = 'mad9133';
	if (StorageService.getStorageList(courseKey)){
		$scope.data.tasks = StorageService.getStorageList(courseKey);
	} else {
		$scope.tasks = ['Task 1', 'Task 2', 'Task 3'];
		StorageService.setStorageList(courseKey, $scope.tasks);
	}

	if (StorageService.getStorageList('Settings')){
		$scope.itemList = StorageService.getStorageList('Settings');
	} else {
		$scope.itemList = [
		{text: "Vibrate when item complete", checked: false},
		{text: "Send notification when list complete", checked: false}
		];

		StorageService.setStorageList('Settings', $scope.itemList);
	}


	// Count the number of items in the list
	// Add default items if no items exist

		$scope.tasks = StorageService.getStorageList(courseKey);
		$scope.addTask = function(){
			$scope.tasks.push($scope.data.task);
			StorageService.setStorageList(courseKey, $scope.tasks);

			$scope.data.task = "";
	}

	// Removes a task
	$scope.removeTask = function(index){
			$scope.tasks.splice(index, 1);
			StorageService.setStorageList(courseKey, $scope.tasks);
	}

	// Removes all tasks on the webpage
	$scope.removeAllTasks = function(){
			$scope.tasks = [];
			StorageService.setStorageList(courseKey, $scope.tasks);
	}

	// Does a vibration when a task is checked
	$scope.checkTask = function(index){
			if ($scope.itemList[0].checked == true){
				$cordovaVibration.vibrate(500);
			}
			StorageService.setStorageList(courseKey, $scope.tasks);
	}


})
.controller('mad9132Ctrl', function($scope, $stateParams, $localStorage, $cordovaVibration, StorageService){
	$scope.data = {};
	console.log("entering mad9132");
	courseKey = 'mad9132';

	if (StorageService.getStorageList(courseKey)){
		$scope.data.tasks = StorageService.getStorageList(courseKey);
	} else {
		$scope.tasks = ['Task 1', 'Task 2', 'Task 3'];
		StorageService.setStorageList(courseKey, $scope.tasks);
	}

	if (StorageService.getStorageList('Settings')){
		$scope.itemList = StorageService.getStorageList('Settings');
	} else {
		$scope.itemList = [
		{text: "Vibrate when item complete", checked: false},
		{text: "Send notification when list complete", checked: false}
		];

		StorageService.setStorageList('Settings', $scope.itemList);
	}


	// Count the number of items in the list
	// Add default items if no items exist

		$scope.tasks = StorageService.getStorageList(courseKey);
		$scope.addTask = function(){
			$scope.tasks.push($scope.data.task);
			StorageService.setStorageList(courseKey, $scope.tasks);

			$scope.data.task = "";
	}

	// Removes a task
	$scope.removeTask = function(index){
			$scope.tasks.splice(index, 1);
			StorageService.setStorageList(courseKey, $scope.tasks);
	}

	// Removes all tasks on the webpage
	$scope.removeAllTasks = function(){
			$scope.tasks = [];
			StorageService.setStorageList(courseKey, $scope.tasks);
	}

	// Does a vibration when a task is checked
	$scope.checkTask = function(index){
			if ($scope.itemList[0].checked == true){
				$cordovaVibration.vibrate(500);
			}
			StorageService.setStorageList(courseKey, $scope.tasks);
	}



})

.controller('mad9135Ctrl', function($scope, $stateParams, $localStorage, $cordovaVibration, StorageService){
	$scope.data = {};
	console.log("entering mad9132");
	courseKey = 'mad9135';

	if (StorageService.getStorageList(courseKey)){
		$scope.data.tasks = StorageService.getStorageList(courseKey);
	} else {
		$scope.tasks = ['Task 1', 'Task 2', 'Task 3'];
		StorageService.setStorageList(courseKey, $scope.tasks);
	}

	if (StorageService.getStorageList('Settings')){
		$scope.itemList = StorageService.getStorageList('Settings');
	} else {
		$scope.itemList = [
		{text: "Vibrate when item complete", checked: false},
		{text: "Send notification when list complete", checked: false}
		];

		StorageService.setStorageList('Settings', $scope.itemList);
	}


	// Count the number of items in the list
	// Add default items if no items exist

		$scope.tasks = StorageService.getStorageList(courseKey);
		$scope.addTask = function(){
			$scope.tasks.push($scope.data.task);
			StorageService.setStorageList(courseKey, $scope.tasks);

			$scope.data.task = "";
	}

	// Removes a task
	$scope.removeTask = function(index){
			$scope.tasks.splice(index, 1);
			StorageService.setStorageList(courseKey, $scope.tasks);
	}

	// Removes all tasks on the webpage
	$scope.removeAllTasks = function(){
			$scope.tasks = [];
			StorageService.setStorageList(courseKey, $scope.tasks);
	}

	// Does a vibration when a task is checked
	$scope.checkTask = function(index){
			if ($scope.itemList[0].checked == true){
				$cordovaVibration.vibrate(500);
			}
			StorageService.setStorageList(courseKey, $scope.tasks);
	}



})
.controller('settingsCtrl', function($scope, StorageService){
	console.log("settings");
	if (StorageService.getStorageList('Settings')){
		$scope.itemList = StorageService.getStorageList('Settings');
	} else {
		$scope.itemList = [
		{text: "Vibrate when item complete", checked: false},
		{text: "Send notification when list complete", checked: false}
		];

		StorageService.setStorageList('Settings', $scope.itemList);
	}
});
/*
.controller('tasksTest', function($scope, $stateParams, UsersService) {

			UsersService.all()
	.then(function successCallBack(response){
		// this call backwill be called asyncrhonolousy)
		// when the response is available


	}, function errorCallback(response){
		// this called asyncrhonolousy when an error occurs
		// or server returns an error
		console.log(response);
	});


});
*/

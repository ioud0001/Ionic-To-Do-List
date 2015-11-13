// File created by Anna Ioudovskaya for HTML5 course
// Description: This project uses bower and ionic to create a to-do list. The data is stored in local storage and can be updated.
// This project also uses vibration

angular.module('starter.service', ['ngStorage'])
.factory('StorageService', function($localStorage){

 // Some tasks
 return {
	 setStorageList: function(key, value){
			$localStorage[key] = value;
	},
	getStorageList: function(key){
		return $localStorage[key];
	},
	resetList: function(key){
		$localStorage[key].reset(key);
	}
 }
});

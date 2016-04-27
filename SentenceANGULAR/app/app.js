/**
 * Sentence Application
 */
(function(){
	var app = angular.module('sentence', []);
	
	app.controller('SentenceController', ['$http', function($http){
		this.sentence = {};
		this.sentence.sortType = "KEY";
		this.sentence.sentence = "";
		
		this.checkWords = function(sentence) {
			$http.post('http://localhost:8080/SentenceWEB/countwords', sentence)
			   .success(function(data){
				   sentence = data;
			   })
			   .error(function(){
				   sentence = {};
			   });
		};
	}]);
	
	/*-----------------------------------------------------------------------------------------*
	 * <title-presentation/>
	 *-----------------------------------------------------------------------------------------*/	
	app.directive('titlePresentation', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/title-presentation.html'
		};
	});
	
	/*-----------------------------------------------------------------------------------------*
	 * <form-layout/>
	 *-----------------------------------------------------------------------------------------*/
	app.directive('formLayout', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/form-layout.html',
			controller:['$http', function($http) {
				var sentence = this;
				
				sentence.sortType = "KEY";
				sentence.sentence = "";
				
				sentence.checkWords = function(sentence) {
					$http.post('http://localhost:8080/SentenceWEB/countwords', sentence).success(function(data){
						sentence = data; 
					});
				};
				
			}],
			controllerAs:'sentenceCtrl'
		};
	});
	
	/*-----------------------------------------------------------------------------------------*
	 * <word-count/> 
	 *-----------------------------------------------------------------------------------------*/
	app.directive('wordCount', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/word-count.html'
		}
	});
})();
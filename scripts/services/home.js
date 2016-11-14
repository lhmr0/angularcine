'use strict';

app.factory('HomeFactory', function($http){

	var url = 'https://cineplanet.herokuapp.com/venta';
	var path = 'https://cineplanet.herokuapp.com/venta';

	var HomeFactory = {

		getVenta: function(){
			return $http.get(url).success(function(data){
				return data;
			})
			.error(function(err){
				console.log(err);
			})
		},

		createUser: function(user){

			return $http.post(path, user).success(function(data){
				return data;
			})
			.error(function(err){
				console.log(err)
			})


		}

	};

	return HomeFactory

});
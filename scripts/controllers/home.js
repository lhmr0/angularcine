'use strict';

app.controller('HomeController', function(HomeFactory){

	var vm = this;

	vm.users = [];

	HomeFactory.getVenta().then(function(data){
		console.log(data.data);
		vm.users = data.data;
	})

});
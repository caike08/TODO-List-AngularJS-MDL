/* JavaScript controller - AngularJS plus Material Design 
 *  Made by Carlos Henrique Motta - March 09, 2015
 */
var App = angular.module("exampleTodo", []);

App.controller('TodoCtrl', ['$scope', function ($scope) {
	
	var todoList = this;

	/* Array of Todos */ 
	todoList.todos = [
		{taskName:'learn angular', isDone:true}
	];

	$scope.init = function() {
		console.log("HELLO LOCALSTORAGE");
		if(window.localStorage['todos']) {
			console.log("trying to load from LOCALSTORAGE");
			todoList.todos = JSON.parse(window.localStorage['todos']);
		}
	}

	todoList.remaining = function() {
		var todo = {},
			count = 0;

		for (var i = 0; i < todoList.todos.length ; i++) {
			todo = todoList.todos[i];
			if(!todo.isDone) {
				count++;
			}
		};

		return count;
	}

	todoList.addItem = function() {
		if (todoList.itemText) {
			todoList.todos.push({taskName: todoList.itemText, isDone: false});
			todoList.saveLocalStorage();
			todoList.itemText = "";
		};
	}

	todoList.saveLocalStorage = function() {
		console.log("trying to save on LOCALSTORAGE");
		window.localStorage['todos'] = JSON.stringify(todoList.todos);
	}

	todoList.deleteTodo = function(index) {
		todoList.todos.splice(index, 1);
		todoList.saveLocalStorage();
	}

	todoList.archive = function() {
		/* TODO: Work on archive function */

		var oldTodos = todoList.todos;
		todoList.todos = [];

		angular.forEach(oldTodos, function(todo) {
        	if (!todo.isDone) todoList.todos.push(todo);
      	});
		todoList.saveLocalStorage();
	}
}]);
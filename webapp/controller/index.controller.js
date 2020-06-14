sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("todoTodo.controller.index", {
		onInit: function() {
			this.viewState = new JSONModel({
				input: "",
				todos: [
				// 	{
				// 	id: "1",
				// 	text: "one",
				// 	checked: true
				// }
				]
			});

			this.getView().setModel(this.viewState, "viewState");
		},
		appendTodo: function(){
			var todos = this.viewState.getProperty("/todos");
			
			this.viewState.setProperty("/todos", todos.concat([{
				id: new Date().getTime().toString(),
				text: this.viewState.getProperty("/input"),
				checked: false
			}]));
			
			this.viewState.setProperty("/input", "");
		},
		deleteTodo: function(event){
			var id = event.getSource().data("id");
			var todos = this.viewState.getProperty("/todos");
			this.viewState.setProperty("/todos", todos.filter(function(todo){
				return todo.id !== id;
			}));
		}
	});
});
function ToDoController(TodoService) {

  var ctrl = this;
  this.newTodo = '';
  this.list = [];

  function getTodos() {
    TodoService
      .retrieve()
      .then(function (response) {
        ctrl.list = response;
      });
  }

  ctrl.addTodo = function () {
    if (!ctrl.newTodo) {
      return;
    }

    TodoService
      .create({
        title: ctrl.newTodo,
        completed: false
      })
      .then(function (response) {
        ctrl.list.unshift(response);
        ctrl.newTodo = '';
      });
  };

  ctrl.removeTodo = function (item, index) {
    TodoService
      .remove(item)
      .then(function (response) {
        ctrl.list.splice(index, 1);
      });
  };

  ctrl.updateTodo = function (item, index){
    if (!item.title){
      TodoService
        ctrl.removeTodo(item, index);
        return;
    }

    TodoService
      .update(item)
  };

  ctrl.getRemaining = function () {
    return ctrl.list.filter(function (item) {
      return !item.completed;
    });
  };

  ctrl.toggleState = function (item) {
    TodoService
      .update(item)
      .then(function () {
        //Do nothing if updates correctly
      }, function () {
        item.completed = !item.completed;
      });
  };

  getTodos();
}

angular
  .module('app')
  .controller('ToDoController', ToDoController);

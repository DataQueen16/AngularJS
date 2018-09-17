function todoApp() {
  return {
    restrict: 'E',
    controller: 'TodoController as todo',
    template: '' +
      '<div class="todo" ng-controller="ToDoController as todo">\n' +
      '    <form class="todo__form" ng-submit="todo.addTodo();">\n' +
      '      <input type="text" placeholder="Add new todo!" ng-model="todo.newTodo">\n' +
      '    </form>\n' +
      '\n' +
      '    <ul class="todo__list">\n' +
      '      <li ng-repeat="item in todo.list">\n' +
      '        <input\n' +
      '          type="checkbox"\n' +
      '          id="todo-{{ $index }}"\n' +
      '          ng-model="item.completed"\n' +
      '          ng-change="todo.toggleState(item);">\n' +
      '          <label class="toggle" for="todo-{{ $index }}"></label>\n' +
      '            <p ng-dblclick="showEditField = true;" ng-hide="showEditField">\n' +
      '              {{ item.title}}\n' +
      '            </p>\n' +
      '          <div ng-show="showEditField">\n' +
      '            <input type="text"\n' +
      '                   ng-model="item.title"\n' +
      '                   ng-blur="todo.updateTodo(item, $index); showEditField = false;"\n' +
      '                   todo-autofocus="showEditField">\n' +
      '          </div>\n' +
      '            <a href="" ng-click="todo.removeTodo(item, $index);">\n' +
      '              &#215;\n' +
      '            </a>\n' +
      '      </li>\n' +
      '    </ul>\n' +
      '    <p class="todo__remaining">\n' +
      '      <span ng-show="todo.getRemaining().length > 0">\n' +
      '        You have {{ todo.getRemaining().length }} of {{ todo.list.length }} items todo!\n' +
      '      </span>\n' +
      '      <span ng-show="todo.getRemaining().length === 0">\n' +
      '        You are super productive!\n' +
      '      </span>\n' +
      '    </p>\n' +
      '  </div>'
  }
}

angular
  .module('app')
  .directive('todoApp', todoApp);

function TodoService($http) {
  
  function create() {
    
  }
  
  function retrieve() {
    
  }
  
  function update() {
    
  }
  
  function remove() {
    
  }
  
  return {
    create: create,
    retrieve: retrieve,
    update: update,
    remove: remove
  }
}

angular
  .module('app')
  .factory('TodoService', TodoService);

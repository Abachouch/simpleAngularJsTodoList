var crudLocalStorage = {

  /**
   * Add a todo to localStorage.
   * @param {string} todo.
   * @returns {boolean} false :in case of duplicat | true : in succes
   */
  addTodo: function (todo) {
    if (!localStorage.todo) localStorage.todo = '[]';
    var ls = JSON.parse(localStorage.todo); // Get array of stored  objects.
    var lsTodo = JSON.parse(localStorage.done);
    if (ls.indexOf(todo) != -1 || lsTodo.indexOf(todo) != -1) return false; //test if todo is alreadyin both "ls.todo" and "ls.done" exist then return false.
    ls.push(todo); // Add todo to array.
    localStorage.todo = JSON.stringify(ls); // submit change to localStorage.
    return true;
  },
  /**
   * this functiondelete todo item from localStorage.todo.
   * @param {string} todo.
   */
  deleteTodo: function (todo) {
    if (!localStorage.todo) localStorage.todo = '[]';
    var ls = JSON.parse(localStorage.todo); // Get array of stored  objects.
    var index = ls.indexOf(todo); // Find the indx of todo.
    ls.splice(index, 1); // Delete the todo item in ls array (locally).
    localStorage.todo = JSON.stringify(ls); // Submit change to localStorage.
  },
  /**
   * this function updates the titl of a todo.
   * @param {sting} oldTodo - the old todo value.
   * @param {string} newTodo - the new value.
   */
  updateTodo: function (oldTodo, newTodo) {
    if (!localStorage.todo) localStorage.todo = '[]';
    if (oldTodo == newTodo) return true;
    console.log('old :' + oldTodo);
    console.log('new :' + newTodo);
    var ls = JSON.parse(localStorage.todo); // Get array of stored  objects.
    if (ls.indexOf(newTodo) != -1) return false; //test if new todo is already exist
    var index = ls.indexOf(oldTodo); // Find the indx of oldTodo.
    ls[index] = newTodo; // Replace the oldTodo wicth newTodo.
    localStorage.todo = JSON.stringify(ls); // Submit change to localStorage.
    return true;
  },
  /**
   * this function deletes done from localStorafe.done
   * @argument {string} done - the item to be deleted.
   */
  deleteDone: function (done) {
    if (!localStorage.done) localStorage.done = '[]';
    var ls = JSON.parse(localStorage.done); // Get array of stored  objects.
    var index = ls.indexOf(done); // Find the indx of done.
    ls.splice(index, 1); // Delete the done item in ls array (locally).
    localStorage.done = JSON.stringify(ls); // Submit change to localStorage.
  },
  /**
   * save a done to localStorage.
   * @param {string} done.
   */
  addDone: function (done) {
    if (!localStorage.done) localStorage.done = '[]';
    var ls = JSON.parse(localStorage.done); // Get array of stored  objects.
    if (ls.indexOf(done) != -1) return false; //test if done already exist then return false.
    ls.push(done); // Add done to array.
    localStorage.done = JSON.stringify(ls); // Submit change to localStorage
  },
  markAsDone: function (todo) {
    deleteTodo(todo); // Delete the todo from localStorage.todo
    addDone(todo); // Add the todo to localStorage.done
  },
  markAsUndone: function (done) {
    deleteDone(done); // Delete the done from localStorage.done
    addTodo(done); // Add the done to localStorage.todo
  },
  /**
   * get all saved todos.
   * @returns {string[]} list of todos.
   */
  getAllTodo: function () {
    if (!localStorage.todo) localStorage.todo = '[]';
    return JSON.parse(localStorage.todo).reverse();
  },
  /**
   * get all completed tasks(A.K.A done) 
   * @returns {string[]} list of done
   */
  getAllDone: function () {
    if (!localStorage.done) localStorage.done = '[]';
    return JSON.parse(localStorage.done).reverse();
  }
}
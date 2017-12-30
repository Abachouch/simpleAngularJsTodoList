
//init localstorage if not exist
if( !localStorage.done ) localStorage.done= '[]' ;
if( !localStorage.todo ) localStorage.todo= '[]' ;
/**
 * Add a todo inoto localStorage.
 * @param {string} todo.
 * @returns {boolean} false :in case of duplicat | true : in succes
 */
function addTodo(todo){
  var ls = JSON.parse(localStorage.todo) ;// Get array of stored  objects.
  if(ls.indexOf(todo) != -1) return false;
  ls.push(todo) ; // Add todo to array.
  localStorage.todo = JSON.stringify(ls); // submit change to localStorage.
  return true ;
}
/**
 * this functiondelete tod item from localStorage.todo.
 * @param {string} todo.
 */
function deleteTodo(todo){
  var ls = JSON.parse(localStorage.todo) ;// Get array of stored  objects.
  var index = ls.indexOf(todo) ; // Find the indx of todo.
  ls.splice(index , 1 ) ; // Delete the todo item in ls array (locally).
  localStorage.todo = JSON.stringify(ls); // Submit change to localStorage.
}
/**
 * this function updates the titl of a todo.
 * @param {sting} oldTodo - the old todo value.
 * @param {string} newTodo - the new value.
 */
function updateTodo(oldTodo , newTodo){
   var ls = JSON.parse(localStorage.todo) ;// Get array of stored  objects.
   var index = ls.indexOf(todo) ; // Find the indx of oldTodo.
   ls[index] = newTodo ; // Replace the oldTodo wicth newTodo.
  localStorage.todo = JSON.stringify(ls); // Submit change to localStorage.
}
/**
 * this function deletes done from localStorafe.done
 * @argument {string} done - the item to be deleted.
 */
function deleteDone(done){
  var ls = JSON.parse(localStorage.done) ; // Get array of stored  objects.
  var index = ls.indexOf(done) ; // Find the indx of done.
  ls.splice(index , 1 ) ;// Delete the done item in ls array (locally).
  localStorage.done = JSON.stringify(ls);// Submit change to localStorage.
}
/**
 * save a done to localStorage.
 * @param {string} done.
 */
function addDone(done){
  var ls = JSON.parse(localStorage.done) ;// Get array of stored  objects.
  ls.push(done) ; // Add done to array.
  localStorage.done = JSON.stringify(ls); // Submit change to localStorage
}
function markAsDone(todo){
  deleteTodo(todo) ; // Delete the todo from localStorage.todo
  addDone(todo) ; // Add the todo to localStorage.done
}
function markAsUndone(done){
  deleteDone(done);// Delete the done from localStorage.done
  addTodo(done);// Add the done to localStorage.todo
}
/**
 * get all saved todos.
 * @returns {string[]} list of todos.
 */
function getAllTodo(){
  return JSON.parse(localStorage.todo).reverse();
}
/**
 * get all completed tasks(A.K.A done) 
 * @returns {string[]} list of done
 */
function getAllDone(){
  return JSON.parse(localStorage.done).reverse() ;
}
function about(){
  return 'abachouch youssouf' ;
}
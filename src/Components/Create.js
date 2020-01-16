import React, { Component } from "react";
import '../App.css'
import TodoItemList from './Reusable/TodoItemList';
import AddTodoItem from './Reusable/AddTodoItem';
import EditTodoItem from './Reusable/EditTodoItem';
export default class Create extends Component {
    constructor() {
        super();
        this.state = {
          id: '',
          userId: 1,
          todo: '',
          status: false,
          todoItem: {},
          todoItems: [],
          trashItem: {},
          trashItems: [],
          completedItem: {},
          completedItems: [],
          editing: false,
          isToggledOn: true,
          message: ""
          
        };
    // var today = new Date(),
    // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        this.completedTodoItem = this.completedTodoItem.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);
        this.editTodoItem = this.editTodoItem.bind(this);
        this.setEditing = this.setEditing.bind(this);
        this.updateTodoItem = this.updateTodoItem.bind(this);
        this.buttonToggle = this.buttonToggle.bind(this);
      }

  componentWillMount() {
    localStorage.getItem("todoItems") &&
      this.setState({
        todoItems: JSON.parse(localStorage.getItem("todoItems")),
      });
    localStorage.getItem("trashItems") &&
      this.setState({
        trashItems: JSON.parse(localStorage.getItem("trashItems")),
      });
    localStorage.getItem("completedItems") &&
      this.setState({
        completedItems: JSON.parse(localStorage.getItem("completedItems")),
      });
    

    }
  

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todoItems", JSON.stringify(nextState.todoItems));
    localStorage.setItem("trashItems", JSON.stringify(nextState.trashItems));
    localStorage.setItem("completedItems", JSON.stringify(nextState.completedItems));
    // localStorage.setItem('date' , Date.now());

  }

  buttonToggle() {
   this.setState(function(prevState){
       return {
           isToggledOn: !prevState.isToggledOn}; });
   
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
 
    this.setState({
      [name]:value,
       message:''
    })
  }

  deleteTodoItem(id) {
    var  todoItems = this.state.todoItems
    var trashItems = this.state.trashItems
    var deleteItem
 function deleteToTrash( todoItems, trashItems, id, operation){
  if(operation === true){
    deleteItem =  todoItems.splice( todoItems.findIndex(e => e.task === id),1);
 trashItems.push(deleteItem)
    localStorage.setItem("trashItems", JSON.stringify(trashItems));
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }
//   else if (operation === false){
//      todoItems = trashItems.splice(trashItems.findIndex(e => e.task === id),1);
//   }
}
window.location.reload();

deleteToTrash( todoItems, trashItems, '', true)

  }

  completedTodoItem(id) {
    var  todoItems = this.state.todoItems
var completedItems = this.state.completedItems
var completeIt
function updateCompletedList( todoItems,  completedItems, id, operation){
  if(operation === true){
    // completedItems =  todoItems.splice( todoItems.findIndex(e => e.task === id),1);
completeIt = todoItems.splice( todoItems.findIndex(e => e.task === id),1);
completedItems.push(completeIt)

localStorage.setItem("completedItems", JSON.stringify(completedItems));
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }
//   else if (operation === false){
//      todoItems = completedItems.splice(completedItems.findIndex(e => e.task === id),1);
//   }
}

window.location.reload();

updateCompletedList( todoItems, completedItems, '', true)
  }



  editTodoItem(todoItem) {
    this.setEditing(true);
    this.setState({
      todo:todoItem.todo,
      todoItem: todoItem
    });
    console.log(todoItem);
  }

  //call back to addtodo
  addTodoItem(event){
    event.preventDefault()
    if (!this.state.todo) return;
    const todoItem = {
      id: this.state.todoItems.length + 1,
      todo: this.state.todo,
      userId: this.state.userId,
      status: this.state.status
    };
    this.setState({
      todo: '',
      todoItem: todoItem,
      todoItems: [...this.state.todoItems, todoItem]
    })
  }
  setEditing(value) {
     this.setState({
      editing: value
    })
  }

  updateTodoItem(event) {
    this.setEditing(false);

    event.preventDefault();
    const updateTodo = this.state.todo;
    const updateTodoItem = Object.assign({}, this.state.todoItem, { todo: updateTodo})
    const todoItems = this.state.todoItems.map((todoItem) => (todoItem.id === this.state.todoItem.id ? updateTodoItem : todoItem));
    this.setState({ todo:'', todoItems: todoItems});
  }
  
  render() {
    const { todoItems, editing, message } = this.state;
      return (
        <div className="App">
             {/*if message or list is empty dont render else render*/
                (message !== "" || todoItems.length === 0) && (
          <p className="message text-danger"> {message}</p>
        )}
          <div className="row App-main">
          { 
              /** SHOW WHEN EDITING OR UPDATING */
            editing  ? (
            <EditTodoItem 
             todo={this.state.todo}
             handleInputChange={this.handleInputChange}
             setEditing={this.setEditing}
             updateTodoItem={this.updateTodoItem}
            />
            ) : (
            <AddTodoItem 
              todo={this.state.todo}
              handleInputChange={this.handleInputChange} 
              addTodoItem={this.addTodoItem}
            />
            )
          }
          </div>
          {todoItems.length > 0 && (
/** SHOW WHEN THERE IS A LIST */
          <div className="row App-main">
            <TodoItemList 
              todoItems= {todoItems} 
              deleteTodoItem={this.deleteTodoItem}
              completedTodoItem={this.completedTodoItem}
              editTodoItem={this.editTodoItem}
            />
          </div>
          )}
        </div>
      );
    }
}


/*class base component*/

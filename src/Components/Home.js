import React, { Component } from "react";
import '../App.css'
import HomeItemList from './Reusable/HomeItemList';

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
    
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        this.completedTodoItem = this.completedTodoItem.bind(this);
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


  
  render() {
    const { todoItems, message } = this.state;
      return (
        <div className="App">
             {/*if message or list is empty dont render else render*/
                (message !== "" || todoItems.length === 0) && (
          <p className="message text-danger"> {message}</p>
        )}
     
          {todoItems.length > 0 && (
/** SHOW WHEN THERE IS A LIST */
          <div className="row App-main">
            <HomeItemList
              todoItems= {todoItems} 
              deleteTodoItem={this.deleteTodoItem}
              completedTodoItem={this.completedTodoItem}
            />
          </div>
          )}
        </div>
      );
    }
}


/*class base component*/

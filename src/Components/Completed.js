import React, { Component } from "react";
import '../App.css'
import CompletedItemsList from "./Reusable/CompletedItemsList";

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
          completedItem: [],
          completedItems: [],
          trashItem: [],
          trashItems: [],
          editing: false,
          isToggledOn: true,
          message: ""
        };
    
        this.deleteCompletedItem = this.deleteCompletedItem.bind(this);
        this.unCompletedItem = this.unCompletedItem.bind(this);
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

  deleteCompletedItem(id) {
    var  completedItems = this.state.completedItems
var trashItems = this.state.trashItems
var trash
function deleteToTrashed( completedItems, trashItems, id, operation){
  if(operation === true){
    trash =  completedItems.splice( completedItems.findIndex(e => e.task === id),1);
    trashItems.push(trash)
    localStorage.setItem("trashItems", JSON.stringify(trashItems));
    localStorage.setItem("completedItems", JSON.stringify(completedItems));
  }
//   else if (operation === false){
//      completedItems = trashItems.splice(trashItems.findIndex(e => e.task === id),1);
//   }
}
window.location.reload();

deleteToTrashed( completedItems, trashItems, '', true)

  }
  unCompletedItem(id) {
    var  todoItems = this.state.todoItems
var completedItemss = this.state.completedItems
var uncompleteItem
function updateUnCompletedList( todoItems,  completedItemss, id, operation){
  if(operation === true){
    // completedItemss =  todoItems.splice( todoItems.findIndex(e => e.task === id),1);
uncompleteItem = completedItemss.splice( completedItemss.findIndex(e => e.task === id),1);
todoItems.push(uncompleteItem)

localStorage.setItem("completedItems", JSON.stringify(completedItemss));
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }
//   else if (operation === false){
//      todoItems = completedItems.splice(completedItems.findIndex(e => e.task === id),1);
//   }
}

window.location.reload();
console.log(uncompleteItem)
updateUnCompletedList( todoItems, completedItemss, '', true)
  }

  render() {
    const {completedItems } = this.state;
      return (
        <div className="App">
        
        
          {completedItems.length > 0 && (
/** SHOW WHEN THERE IS A LIST */
          <div className="row App-main">
            <CompletedItemsList
              completedItems= {completedItems} 
              deleteCompletedItem={this.deleteCompletedItem}
              unCompletedItem={this.unCompletedItem}
            />
          </div>
          )}
        </div>
      );
    }
}


/*class base component*/




import React, { Component } from "react";
import '../App.css'
import TrashList from './Reusable/TrashList';

export default class Create extends Component {
    constructor() {
        super();
        this.state = {
          id: null,
          userId: 1,
          todo: '',
          status: false,
          trashItem: [],
          trashItems: [],
          todoItem: {},
          todoItems: [],
          editing: false,
          isToggledOn: true,
          message: ""
        };
    
        
        this.restoreTodoItem = this.restoreTodoItem.bind(this);
        this.deleteForever = this.deleteForever.bind(this);

      }

  componentWillMount() {
    localStorage.getItem("trashItems") &&
      this.setState({
        trashItems: JSON.parse(localStorage.getItem("trashItems")),
      });
      this.setState({
        todoItems: JSON.parse(localStorage.getItem("todoItems")),
      });
    //   if (this.state.trashItems.length === 0) {
    //     this.setState({
    //       message: "no items create"
    //     });
    //   }
      /*if it exist on storage set the state as that and show *? */
    }
  
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("trashItems", JSON.stringify(nextState.trashItems));
    // localStorage.setItem('mainList date' , Date.now());
    localStorage.setItem("todoItems", JSON.stringify(nextState.todoItems));

  }

  buttonToggle() {
   this.setState(function(prevState){
       return {
           isToggledOn: !prevState.isToggledOn}; });
  }

  deleteForever(id) {
          /* get old state(mainlst) compare and keep if not equal if equal then remove what we want to delete */
    const trashItems = this.state.trashItems.filter( item => item.index !== id );
    this.setState({trashItems: trashItems});
    if(this.state.editing === true) {
      window.location.reload();
    }
    if (trashItems.length === 0) {
        this.setState({
          message: "all items dl"
        });
      }
  }

  restoreTodoItem(id) {
    var  todoItems = this.state.todoItems
    var trashItems = this.state.trashItems
    var restoreItems
 function restoreItem( todoItems, trashItems, id, operation){
  if(operation === true){
    restoreItems= trashItems.splice( trashItems.findIndex(e => e.task === id),1);
 todoItems.push(restoreItems)
    localStorage.setItem("trashItems", JSON.stringify(trashItems));
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }
//   else if (operation === false){
//      todoItems = trashItems.splice(trashItems.findIndex(e => e.task === id),1);
//   }
}
window.location.reload();
restoreItem( todoItems, trashItems, '', true)

console.log(todoItems)
  }


  render() {
    const {trashItems, message } = this.state;
      return (
        <div className="App">
             {/*if message or list is empty dont render else render*/
                (message !== "" || trashItems.length === 0) && (
          <p className="message text-danger"> {message}</p>
        )}
        
          {trashItems.length > 0 && (
/** SHOW WHEN THERE IS A LIST */
          <div className="row App-main">
            <TrashList 
              trashItems= {trashItems} 
              deleteTodoItem={this.deleteForever}
              restoreTodoItem={this.restoreTodoItem}
            />
          </div>
          )}
        </div>
      );
    }
}







// import React, { Component } from "react";
// import '../App.css'
// export default class Trash extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //       trashItem: [],
//   //       trashItems: [],
//   //     message: "add new stuff!",
//   //     isEditing: false,
      
//   //   };
//   // }

//   componentWillMount() {
//     localStorage.getItem("trashItem") &&
//       this.setState({
//         trashItems: JSON.parse(localStorage.getItem("trashItems")),
//         message: ""
//       });
//       /*if it exist on storage set the state as that and show *? */
//     }
    
//     componentWillUpdate(nextProps, nextState) {
//       console.log(this.state.trashItem)
//     localStorage.setItem("trashItem", JSON.stringify(nextState.trashItem));
//     // localStorage.setItem('trashItem date' , Date.now());
//   }
//   //call back to addtodo
// //   addTodo(e) {
// //     e.preventDefault();
// //     const { trashItem } = this.state;
// //     const newTodo = this.newTodo.value;
// //     const exists = trashItem.includes(newTodo);

// //     if (exists) {
// //       /* check if index already exists*/
// //       this.setState({
// //         message: "this is already on the list"
// //       });
// //     } else {
// //       newTodo !== "" &&
// //         this.setState({
// //           /* check if not empty add to state, if empty dont run */
// //           trashItem: [...this.state.trashItem, newTodo],
// //           message: ""
// //         });
// //     }
// //     this.listBody.reset(); /*reset the box after adding*/
// //   }
//   deleteTodo(index) {
//     /* get old state(mainlst) compare and keep if not equal if equal then remove what we want to delete */
//     const newTodo = this.state.trashItem.filter(newTodo => {
//       return newTodo !== index;
//     });
//     this.setState({
//       trashItem: [...newTodo]
//     });

//     if (newTodo.length === 0) {
//       this.setState({
//         message: "no items on the list add some."
//       });
//     }
//   }

//   clearAll() {
//     this.setState({
//       trashItem: [],
//       message: "all deleted"
//     });
//   }
//   render() {

//     const { trashItem, message } = this.state; /*destructure*/
//     return (

//       <div>

//         {/*if message or list is empty dont render else render*/
//         (message !== "" || trashItem.length === 0) && (
//           <p className="message text-danger"> {message}</p>
//         )}
//         {trashItem.length > 0 && (
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">Task</th>
//                 <th scope="col">Restore</th>
//                 <th scope="col">Delete</th>
//                 <th scope="col">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {trashItem.map(index => {
//                 return (
//                   <tr key={index}>
//                     <td>
//                     <input type="text" 
//                     defaultValue={index} />
//                     </td>
//                     <td>
//                       <button type="button" onClick={e => this.isEditing(index)}>
//                         {" "}
//                         restore
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         type="button"
//                         onClick={e => this.deleteTodo(index)}
//                       >
//                         {" "}
//                         delete
//                       </button>
//                       <button
//                         type="button"
//                         // onClick={this}
//                       >
//                         {index ? 'bought' : 'pending' }

//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//               <td>
//                 <button onClick={e => this.clearAll()}> clearlist</button>
//               </td>
//           </table>
//         )}
//       </div>
//     );
//   }
// }

// /*class base component*/

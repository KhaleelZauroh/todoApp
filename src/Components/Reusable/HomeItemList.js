import React from 'react';

  const HomeItemlist = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Things to do</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            { 
              props.todoItems.length > 0 ? (
                props.todoItems.map((todoItem) => (
                    <tr key={todoItem.id}>
                      {/* <td>{  todoItem.id }</td> */}
                      <td>{todoItem.todo}</td>
                      <td>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteTodoItem(todoItem.id)}>Delete</button>
                        <button className="btn btn-info ml-2" onClick={() => props.completedTodoItem(todoItem.id)}>
                          {todoItem.status ? 'bought' : 'pending' }
                        </button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                
                <tr>
                  <td colSpan={3}>Nothing to do</td>
                </tr>
              )
            }
        </tbody>
      </table>
    );
  }


export default  HomeItemlist;



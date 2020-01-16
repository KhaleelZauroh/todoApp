import React from 'react';

  const TodoItemList = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Tasks to do</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
            { 
              props.todoItems.length > 0 ? (
                props.todoItems.map((todoItem) => (
                    <tr key={todoItem.id}>
                      <td>{ todoItem.todo }</td>
                      <td>
                        <button className="btn btn-primary ml-2" onClick={() => props.editTodoItem(todoItem) }>Edit</button>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteTodoItem(todoItem.id) }>Delete</button>
                        <button className="btn btn-info ml-2" onClick={() => props.completedTodoItem(todoItem) }>
                          { todoItem.status ? 'bought' : 'pending' }
                        </button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={3}>Nothing todo</td>
                </tr>
              )
            }
        </tbody>
      </table>
    );
  }


export default TodoItemList;



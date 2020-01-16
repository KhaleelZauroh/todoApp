import React from 'react';

  const  TrashList = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Deleted</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            { 
              props.trashItems.length > 0 ? (
                props.trashItems.map((trashItem) => (
                    <tr key={trashItem.id}>
                      <td>{trashItem.todo}</td>
                      <td>
                        <button className="btn btn-info ml-2" onClick={() => props.restoreTodoItem(trashItem)}> Restore</button>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteForever(trashItem.id)}>Permanently Delete</button>
                        
                      </td>
                    </tr>
                  )
                )
              ) : (
                
                <tr>
                  <td colSpan={3}>Nothing in trash yet</td>
                </tr>
              )
            }
        </tbody>
      </table>
    );
  }


export default TrashList;



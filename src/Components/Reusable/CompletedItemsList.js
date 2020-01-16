import React from 'react';

  const  CompletedItemsList = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            { 
              props.completedItems.length > 0 ? (
                props.completedItems.map((completedItem) => (
                    <tr key={completedItem.id}>
                      <td>{completedItem.todo}</td>
                      <td>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteCompletedItem(completedItem.id)}>Delete</button>
                        <button className="btn btn-info ml-2" onClick={() => props.unCompletedItem(completedItem)}>
                          {completedItem.status ? 'pending' : 'completed' }
                        </button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                
                <tr>
                  <td colSpan={3}>Nothing completed</td>
                </tr>
              )
            }
        </tbody>
      </table>
    );
  }


export default CompletedItemsList;



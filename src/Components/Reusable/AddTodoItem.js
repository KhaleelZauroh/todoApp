import React from 'react'

const AddTodoItem = props => {
  return (
    <form onSubmit={ props.addTodoItem }>
      <div className="form-group">
        <label>Add Something to do</label>
        <input type="text" className="form-control" name="todo" value={props.todo} onChange={ props.handleInputChange}/>
      </div>
 
      <button className="btn btn-success mt-2"> Add </button>
    </form>
  )
}

export default AddTodoItem;
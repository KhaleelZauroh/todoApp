import React from 'react'

const EditTodoItem = props => {
  return (
    <form>
      <div className="form-group">
        <label>Change your task</label>
        <input type="text" className="form-control" name="todo" value={props.todo} onChange={ props.handleInputChange}/>
      </div>
      <button onClick={ props.updateTodoItem } className="btn btn-success mt-2"> Update </button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info mt-2">Cancel</button>
    </form>
  )
}

export default EditTodoItem;
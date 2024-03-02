// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  onClickEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  onChangeUpdatedTitle = event => {
    this.setState({updatedTitle: event.target.value})
  }

  onClickSave = () => {
    this.setState({
      editing: false,
    })
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {id, title, completed} = todoDetails
    const {editing, updatedTitle} = this.state
    return (
      <li className="todo-item">
        <div className="title-check-box-container">
          <input
            type="checkbox"
            checked={completed}
            onClick={() => toggleComplete(id)}
          />
          <p className={completed ? 'title checked' : 'title'}>
            {editing ? (
              <input
                type="text"
                value={updatedTitle}
                onChange={this.onChangeUpdatedTitle}
              />
            ) : (
              title
            )}
          </p>
        </div>
        <div className="buttons-container">
          {editing ? (
            <button
              type="button"
              className="edit-button"
              onClick={this.onClickSave}
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className="edit-button"
              onClick={this.onClickEdit}
            >
              Edit
            </button>
          )}
          <button
            type="button"
            className="delete-btn"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem

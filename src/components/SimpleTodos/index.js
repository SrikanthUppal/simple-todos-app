import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    newTitle: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  onChangeInputTodo = event => {
    this.setState({newTitle: event.target.value})
  }

  onAddTodo = () => {
    const {newTitle, todosList} = this.state
    if (newTitle === '') {
      // eslint-disable-next-line no-alert
      alert('Please Enter Your Task')
    } else {
      const newTodo = {
        id: todosList.length + 1,
        title: newTitle,
        completed: false,
      }
      this.setState({todosList: [...todosList, newTodo], newTitle: ''})
    }
  }

  toggleComplete = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todosList: updatedTodoList})
  }

  render() {
    const {todosList, newTitle} = this.state
    console.log(todosList)
    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo">
            <input
              type="text"
              value={newTitle}
              onChange={this.onChangeInputTodo}
              className="todo-input"
              placeholder="Enter Your Task"
            />
            <button
              type="button"
              className="add-button"
              onClick={this.onAddTodo}
            >
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

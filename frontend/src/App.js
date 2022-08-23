import React from 'react';
import './App.css';
import UserList from './components/User.js'
import ProjectList from './components/Project.js'
import TodoList from './components/Todo.js'
import axios from 'axios'
import { Route, BrowserRouter, Routes, Link, useLocation } from 'react-router-dom'

const NotFound404 = () => {
  var { pathname } = useLocation()

  return (
    <div>
      Страница по адресу "{pathname}" не найдена
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'projects': [],
      'todos': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/')
      .then(response => {
        const users = response.data
        this.setState(
          {
            'users': users
          }
        )
      }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/project/')
      .then(response => {
        const projects = response.data
        this.setState(
          {
            'projects': projects
          }
        )
      }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/todo/')
      .then(response => {
        const todos = response.data
        this.setState(
          {
            'todos': todos
          }
        )
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to='/'>Users</Link>
              </li>
              <li>
                <Link to='/project'>Project</Link>
              </li>
              <li>
                <Link to='/todo'>Todo</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path='/' element={<UserList users={this.state.users} />} />
            <Route exact path='/project' element={<ProjectList projects={this.state.projects} />} />
            <Route exact path='/todo' element={<TodoList todos={this.state.todos} />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;

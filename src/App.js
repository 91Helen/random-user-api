import './App.css';
import { Component } from 'react';
import axios from 'axios'


class App extends Component {
  state = {
    users: []
  }

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    const users = res.data;
    console.log(users)
    this.setState({users})
  })
}

  render(){
    return(
      <div>
    {this.state.users.map(user=> <p key={user.id}>{user.name}
      <span>{user.email}</span> </p> )}
      </div>
    )
  }
}

export default App;

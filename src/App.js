import React from 'react';
import Todos from './Components/Todos'

import './App.css';


class  App extends React.Component {

  state={
todos:[
  {
    id:1,
    title:'Whatever it takes',
    completed: false
  },
  {
    id:2,
    title:'Undead',
    completed: false
  },
  {
    id:3,
    title:'Levitate',
    completed: false
  },
]

  }

  render(){
    console.log(this,this.state.todos)
  return (
    <div className="App">
    <Todos todos={this.state.todos}/>
    </div>
  );
}
}

export default App;

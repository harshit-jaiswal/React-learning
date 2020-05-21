import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons :[
      {name:'harshit',age:23},
      {name:'Ram',age:57},
      {name:'Deva',age:40}
    ]
  }

  switchNameHandler = () =>
  {
    // console.log("This was clicked");
    this.setState({
      persons :[
        {name:'Jaiswal',age:23},
        {name:'Ram',age:57},
        {name:'Deva',age:42}
      ]
    }
      
    )
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
         <h1>Hello React</h1>
         <p>
           This text in inside a paragraph tag
         </p>
         <button onClick={this.switchNameHandler}>Switch Name</button>
         <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}/>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I love to travel</Person>
         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      // React.createElement('h1',{className:'App'},'This is creating element')
    );
  }
}

export default App;

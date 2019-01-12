import React, { Component } from 'react';
import './App.css';
import UserOutput from '../component/UserOutput'
import UserInput from '../component/UserInput'
import UserOutputExample2 from '../component/UserOutputExample2'

class App extends Component {

  state = ({
    person: [
      {id: 0, name: "Dave"},
      {id: 1, name: "Tina"},
      {id: 2, name: "Jerry"}
    ],
    toggleOutput: true,
    toggleOutputExample2: true
  })

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        {name: event.target.value},
        {name: "Tina"},
        {name: "Jerry"}
      ]
    })
  }

  nameClickHandler = () => {
    this.setState({
      person: [
        {name: "Dave"},
        {name: "Tina"},
        {name: "Jerry"}
      ]
    })
  }

  toggleShowHandler = () => {
    const showOutput = this.state.toggleOutput
    this.setState({
      toggleOutput: !showOutput
    })
  }

  toggleShowHandlerExample2 = () => {
    const showOutputExample2 = this.state.toggleOutputExample2
    this.setState({
      toggleOutputExample2: !showOutputExample2
    })
  }

  render() {
    const toggle = (this.state.toggleOutputExample2)
    let OutputExample;
    let OutputExample2;

    if (this.state.toggleOutputExample2) {
      OutputExample2 = this.state.person.map(person => {
        return(
          <UserOutputExample2
            key={person.id}
            name={person.name}
            toggle={toggle}
            click={this.nameClickHandler}
          />
        )
      });
    } else OutputExample2 = null;

    OutputExample = this.state.person.map(person => {
      return(
        <UserOutput
          key={person.id}
          name={person.name}
          toggle={this.state.toggleOutputExample2}
          click={this.nameClickHandler}
        />
      )
    })

    return (
      <div className="App">
        <div className="Buttons">
          <button onClick={this.toggleShowHandler}>Show/Hide Toggle Example 1</button>
          <button onClick={this.toggleShowHandlerExample2}>Show/Hide Toggle Example 2</button>
        </div>

        { this.state.toggleOutput ?
          <div>
            {OutputExample}
          </div> : null
        }

        {OutputExample2}

        <UserInput
          change={this.nameChangeHandler}
        />
      </div>
    );
  }
}

export default App;

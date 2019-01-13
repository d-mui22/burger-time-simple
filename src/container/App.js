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
    toggleOutput: false,
    toggleOutputExample2: false,
    toggleSelected: null,
    toggleSelected2: null
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
debugger
  toggleShowHandler = () => {
    const showOutput = this.state.toggleOutput
    const toggle = this.state.toggleSelected
debugger
    this.setState({
      toggleOutput: !showOutput,
      toggleSelected: !toggle,
      toggleSelected2: false
    })
  }

  toggleShowHandlerExample2 = () => {
    const toggle2 = this.state.toggleSelected2
    const showOutputExample2 = this.state.toggleOutputExample2

    this.setState({
      toggleOutputExample2: !showOutputExample2,
      toggleSelected2: !toggle2,
      toggleSelected: false
    })
  }

  render() {
    let OutputExample;
    let OutputExample2;
    const toggle = this.state.toggleSelected
    const toggle2 = this.state.toggleSelected2

    if (this.state.toggleOutputExample2) {
      OutputExample2 = this.state.person.map(person => {
        return(
          <UserOutputExample2
            key={person.id}
            name={person.name}
            toggle={toggle2}
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
          toggle={toggle}
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

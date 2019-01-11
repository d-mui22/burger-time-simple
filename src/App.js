import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput'
import UserInput from './UserInput'

class App extends Component {

  state = ({
    person: [
      {id: 0, name: "Dave"},
      {id: 1, name: "Tina"},
      {id: 2, name: "Jerry"}
    ],
    toggleOutput: false,
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

  nameClickHandler = (newName) => {
    this.setState({
      person: [
        {name: newName},
        {name: "Tina"},
        {name: "Jerry"}
      ]
    })
  }

  toggleShowHandler = () => {
    const showOutput = this.state.toggleOutput
    const switch2 = this.state.toggleOutputExample2
    this.setState({
      toggleOutput: !showOutput,
      toggleOutputExample2: !switch2
    })
  }

  toggleShowHandlerExample2 = () => {
    const showOutputExample2 = this.state.toggleOutputExample2
    const switch1 = this.state.toggleOutput
    this.setState({
      toggleOutputExample2: !showOutputExample2,
      toggleOutput: !switch1
    })
  }

  render() {
    const toggle = (this.state.toggleOutputExample2)
    let outPutExample2;

    if (this.state.toggleOutputExample2) {
      outPutExample2 = this.state.person.map(person => {
        return(
          <UserOutput
            key={person.id}
            name={person.name}
            toggle={this.state.toggleOutput}
            />
        )
      });
    } else outPutExample2 = null;

    return (
      <div className="App">
        <div className="Buttons">
          <button onClick={this.toggleShowHandler}>Show/Hide Toggle Example 1</button>
          <button onClick={this.toggleShowHandlerExample2}>Show/Hide Toggle Example 2</button>
        </div>

        { this.state.toggleOutput ?
          <div>
            <UserOutput
              name={this.state.person[0].name}
              toggle={this.state.toggleOutput}
              />
            <UserOutput
              name={this.state.person[1].name}
              click={this.nameClickHandler.bind(this,'Mike')}
              />
          </div> : null
        }

        {outPutExample2}

        <UserInput
          change={this.nameChangeHandler}
          name={this.state.person[0].name}
        />
      </div>
    );
  }
}

export default App;

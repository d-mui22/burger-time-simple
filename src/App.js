import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput'
import UserInput from './UserInput'
import UserOutputExample2 from './UserOutputExample2'

class App extends Component {

  state = ({
    person: [
      {name: "Dave"},
      {name: "Tina"},
      {name: "Jerry"}
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
    let outPutExample2 = (
      <div className="Toggle-Example-2">
        <UserOutputExample2
          name={this.state.person[2].name}
          click={this.nameClickHandler.bind(this, 'jake')}
          toggle={this.state.toggleOutputExample2}
          />
      </div>
    );
    if (!this.state.toggleOutputExample2) {
      outPutExample2 = null;
    }

    return (
      <div className="App">
        <div className="Buttons">
          <button onClick={this.toggleShowHandler}>Show/Hide Toggle Example 1</button>
          <button onClick={this.toggleShowHandlerExample2}>Show/Hide2 Toggle Example 2</button>
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

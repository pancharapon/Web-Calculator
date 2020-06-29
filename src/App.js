import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Display from './components/Display/Display';
import Keypad from './components/Keypad/Keypad';



class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '0'
    }
  }

  onInputChange = (digit) => {
    if (this.state.input === '0') {
      this.setState({input: String(digit)})
    } else {
      this.setState({input: this.state.input + digit})
    }
  }

  inputDot = () => {
    if (this.state.input.indexOf('.') === -1) {
      this.setState({input: this.state.input + '.'})
    }
  }

  clearDisplay = () => {
    this.setState({input: '0'})
  }

   calculate = () => {
    var checkResult = '';
    if (this.state.input.includes('--')) {
      checkResult = this.state.input.replace('--', '+')
    } else {
      checkResult = this.state.input
    } try {
      // eslint-disable-next-line
      this.setState({input: (eval(checkResult) || "" ) + ""})
    } catch (error) {
      this.setState({input: 'error'})
    }
  }





  render() {
    return (
      <div className="App">
        <div>
        <Navigation />
        </div>
        <div className="calculator-body mt5 shadow-5">
          <Display onDisplayChange={this.state.input}/>
          <Keypad onInputChange={this.onInputChange} inputDot={this.inputDot} clearDisplay={this.clearDisplay} calculate={this.calculate} />
        </div>
      </div>
      );
  }
}

export default App;

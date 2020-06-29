import React, { Component } from 'react'
import './Keypad.css'


class Keypad extends Component {
	render() {
		return(
			<div className="button">
                <button name="AC" style={{backgroundColor: '#DCDCDC'}} onClick={() => this.props.clearDisplay()}>AC</button>
                <button name="(" style={{backgroundColor: '#DCDCDC'}} onClick={() => this.props.onInputChange('(')}>(</button>
                <button name=")" style={{backgroundColor: '#DCDCDC'}} onClick={() => this.props.onInputChange(')')}>)</button>
                <button name="/" style={{color: 'white', backgroundColor: 'orange'}} onClick={() => this.props.onInputChange('/')}>÷</button>


                <button name="7" onClick={() => this.props.onInputChange('7')}>7</button>
                <button name="8" onClick={() => this.props.onInputChange('8')}>8</button>
                <button name="9" onClick={() => this.props.onInputChange('9')}>9</button>
                <button name="x" style={{color: 'white', backgroundColor: 'orange'}} onClick={() => this.props.onInputChange('*')}>x</button>


                <button name="4" onClick={() => this.props.onInputChange('4')}>4</button>
                <button name="5" onClick={() => this.props.onInputChange('5')}>5</button>
                <button name="6" onClick={() => this.props.onInputChange('6')}>6</button>
                <button name="-" style={{color: 'white', backgroundColor: 'orange'}} onClick={() => this.props.onInputChange('-')}>-</button>

                <button name="1" onClick={() => this.props.onInputChange('1')}>1</button>
                <button name="2" onClick={() => this.props.onInputChange('2')}>2</button>
                <button name="3" onClick={() => this.props.onInputChange('3')}>3</button>
                <button name="+" style={{color: 'white', backgroundColor: 'orange'}} onClick={() => this.props.onInputChange('+')}>+</button>


                <button name="0" className="zero" onClick={() => this.props.onInputChange('0')}>0</button>
                <button name="." onClick={() => this.props.inputDot()}>.</button>
                <button name="=" style={{color: 'white', backgroundColor: 'orange'}} onClick={() => this.props.calculate('=')}>=</button>
            </div>
			)
	}
}

export default Keypad;
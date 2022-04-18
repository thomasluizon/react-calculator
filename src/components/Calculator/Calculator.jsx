import React, { Component } from 'react';
import './calculator.css';
import Button from '../Button/Button';
import Display from '../../components/Display/Display';

const initialState = {
   displayValue: '0',
   clearDisplay: false,
   operation: null,
   values: [0, 0],
   current: 0,
};

export default class Calculator extends Component {
   state = { ...initialState };

   clearMemory = () => {
      this.setState({ ...initialState });
   };

   setOperation = operation => {
      if (this.state.current === 0) {
         this.setState({ operation, current: 1, clearDisplay: true });
      } else {
         const finish = operation === '=';
         const currentOperation = this.state.operation;
         const values = [...this.state.values];
         try {
            values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
         } catch (e) {
            values[0] = this.state.values[0];
         }
         values[1] = 0;

         this.setState({
            displayValue: values[0],
            operation: finish ? null : operation,
            current: finish ? 0 : 1,
            clearDisplay: !finish,
            values,
         });
      }
   };

   addDigit = n => {
      if (n === '.' && this.state.displayValue.includes('.')) {
         return;
      }

      const clearDisplay =
         this.state.displayValue === '0' || this.state.clearDisplay;
      const currentValue = clearDisplay ? '' : this.state.displayValue;
      const displayValue = currentValue + n;
      this.setState({ displayValue, clearDisplay: false });

      if (n !== '.') {
         const i = this.state.current;
         const newValue = parseFloat(displayValue);
         const values = [...this.state.values];
         values[i] = newValue;
         this.setState({ values });
      }
   };

   render() {
      return (
         <div className="calculator">
            <Display value={this.state.displayValue} />
            <Button label="AC" click={this.clearMemory} className="triple" />
            <Button label="/" className="operation" click={this.setOperation} />
            <Button label="7" click={this.addDigit} />
            <Button label="8" click={this.addDigit} />
            <Button label="9" click={this.addDigit} />
            <Button label="*" className="operation" click={this.setOperation} />
            <Button label="4" click={this.addDigit} />
            <Button label="5" click={this.addDigit} />
            <Button label="6" click={this.addDigit} />
            <Button label="-" className="operation" click={this.setOperation} />
            <Button label="1" click={this.addDigit} />
            <Button label="2" click={this.addDigit} />
            <Button label="3" click={this.addDigit} />
            <Button label="+" className="operation" click={this.setOperation} />
            <Button label="0" className="double" click={this.addDigit} />
            <Button label="." click={this.addDigit} />
            <Button label="=" className="operation" click={this.setOperation} />
         </div>
      );
   }
}

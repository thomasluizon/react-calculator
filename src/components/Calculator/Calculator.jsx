import React, { Component } from 'react';
import './calculator.css';
import Button from '../Button/Button';
import Display from '../../components/Display/Display';

export default class Calculator extends Component {
   clearMemory = () => {
      console.log('limpar');
   };

   setOperation = operation => {
      console.log(operation);
   };

   addDigit = n => {
      console.log(n);
   };

   render() {
      return (
         <div className="calculator">
            <Display value={100} />
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

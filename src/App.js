import React from 'react';
import './App.css';
let count = 0;
let decrement;
let increment;

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={count: count}

    increment = () =>{
      this.setState({count: count++});
    }
    
     decrement = () => {
      this.setState({count: count--});
    }
  }
  render(){
  return (
    <>
     <div className="App">
    <h1>Simple increment and decrement counter</h1>
    <div className="container">
    <button className="btn" onClick={decrement}>-</button>
      <h1 className="btn">{this.state.count}</h1>
    <button className="btn" onClick={increment}>+</button>
    </div>
    </div>
    </>
   ) }
}

export default App;

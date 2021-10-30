import './App.css';
import React from 'react';
import Random from './component/Random'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      min:"",
      max:"",
      number:""
    }
  }
  totalRandomIs=()=>{
    const{min,max}=this.state
    this.setState({number:this.generateNumber(min,max)})
  }
  minInputChange=(event)=>{
    this.setState({min:event.target.value})
    console.log(this.state.min)
  }
  maxInputChange=(event)=>{
    this.setState({max:event.target.value})
    console.log(this.state.max)
  }
  generateNumber =(min,max)=>{
    return Math.floor(Math.random()*(Number(max)-Number(min))+Number(min))
  }
  generateBtn=()=>{
    const{min,max}=this.state
    if(min > max){
      const minimum=min;
      const maximum=max
      this.setState({
        min:minimum,
        max:maximum
      },()=>{
        this.setState({number:this.generateNumber(min, max)})
      })
    }
    else{
      this.setState({number:this.generateNumber(min,max)})
    }
  }
  render(){
    const{number,min,max}=this.state
    const{minInputChange,maxInputChange,generateBtn}=this
    return (
      <div className="App">
        <h1>Random Number</h1>
      <h3>Random Number is:{number}</h3>
      <Random  value={min,max} minInputChange={minInputChange} maxInputChange={maxInputChange} generateBtn={generateBtn}/>
      </div>
    );
  }
}

export default App;

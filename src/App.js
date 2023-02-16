
import './App.css';
import {evaluate} from 'mathjs';

import React from 'react';

const cleandecimals = (str) => {
   
  var new_str;
  var arr=str.split(/([/,*,\-,+])/);
  arr=  arr.map(x=> x.replace(/(?<=(.*\..*))\./gm, '')  );
  new_str=  arr.join('');
  return   new_str ;}

function App() {
  
  const [numPressed, setnumPressed] = React.useState("0");
   
  const handleClick = (event) => {

      if (numPressed==="0")   setnumPressed(event.target.value);
      else  setnumPressed(numPressed+event.target.value);
  

  };
  const handleClear = () => {
    setnumPressed("0");
  };
  
  const handleEqual = () => {
   
    
    setnumPressed(      evaluate(  cleandecimals(numPressed) ));
   
  };
  let nums=[{value:0,id:"zero"},{value:1,id:"one"},{value:2,id:"two"},{value:3,id:"three"},{value:4,id:"four"},{value:5,id:"five"},{value:6,id:"six"},{value:7,id:"seven"},{value:8,id:"eight"},{value:9,id:"nine"}];
  let operations=[{value:"+" , id:"add" }, {value:"-",id:"subtract"}, {value:"*",id:"multiply"}, {value:"/",id:"divide"}];
  const buttons=nums.map(({value,id}) => <button type="button" className='btn btn-info' id={id} value={value.toString()} onClick={handleClick} >{value.toString()}</button>);
 const opsbuttons=operations.map(({value,id}) => <button  className='btn btn-info' id={id} value={value.toString()} onClick={ handleClick}>{value.toString()}</button>);

  return (
    <div className="App">
      <header className="App-header"> 
     <div className='container'>
     <h1>Calculator</h1>
     <div id="display" className='form-control'>{numPressed}</div>
     {buttons}
      {opsbuttons}
      <button  className='btn btn-info' id="decimal" value="." onClick={ handleClick}>.</button>
      <button className='btn btn-info' id="clear" value="C" onClick={handleClear}>C</button>
      <button className="btn btn-info" type="button" Text="=" value="=" id="equals" onClick={handleEqual} >= </button>
     </div>
      </header>
   </div>
  );
}

export default App;

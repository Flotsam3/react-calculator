import React, {useState} from 'react';
import './App.css';
import Display from './Components/Display';
import Keys from './Components/Keys'

function App() {
  const [state, setState] = useState('0');

  const handleKeypress = (keyValue = '0')=>{

    if (keyValue === 'clear') {
      setState('0')
    } 
    else if (state === '0' && keyValue !== '.'){
      setState(keyValue)
    } else if (keyValue === '+-'){
       if (state.charAt(0) !== '-'){
         setState('-'.concat(state));
       } else {
         setState(state.substring(1))
       }
    }
    else if (keyValue === '='){
      handleResult();
    }
    else {
      setState(state.concat(keyValue));
    }
  }

  const handleResult = ()=>{
    // setState(eval(state));
    const updateState = JSON.stringify(eval(state));
    setState(updateState);
  }

  return (
    <div className="calculator">
      <Display onDisplay={state} />
      <Keys onKeyPress={handleKeypress} />
    </div>
  );
}

export default App;

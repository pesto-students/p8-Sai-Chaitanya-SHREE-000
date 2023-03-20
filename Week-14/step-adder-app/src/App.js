import './App.css';
import { addStep, clearStep } from './features/stepSlice';
import {useDispatch, useSelector } from 'react-redux';

const app = {
  display: 'flex',
  height: '50vh',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '10vh',
};

const childText = {
  marginTop: '20px',
  fontSize: 'xx-large',
};

const childButton = {
  marginTop: '20px',
};

const addButton = {
  width: '100px',
  height: '50px',
  backgroundColor: 'green'  
}

const clearButton = {
  width: '100px',
  height: '50px',
  backgroundColor: 'red'  
}

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.stepAdder.value);

  const add = () => {
    dispatch(addStep());
  };

  const clear = () => {
    dispatch(clearStep());
  };

  return (
    <div  style={app}>
      <div style={childText}>
        You Have Walked {count} Steps Today!
    </div>
    <div  style={childButton}>
    <button style={addButton} onClick={add}>
      Add a Step
    </button>
    </div>
    <div  style={childButton}>
    <button style={clearButton} onClick={clear}>
      Reset Steps
    </button>
    </div>
    </div>
  );
}

export default App;

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { isOn } from './features/switchSlice';

const button = {
  marginTop: '50vh',
  height: '50px',
  width: '100px',
  borderRadius: '8px',
  backgroundColor: 'green',
  color: 'white',
  marginLeft: "50px"
};

const app = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const blackBox = {
  backgroundColor: 'black',
  color: 'white',
};

const whiteBox = {
  backgroundColor: 'white',
  color: 'black'
};

function App() {
  const dispatch = useDispatch();
  const isOff = useSelector(state => state.switch.value);
  const handleClick = () => {
    dispatch(isOn());
  }
  return (
    <div style={app}>
      <div style={isOff ? whiteBox : blackBox}>
        The Room is {!isOff ? "Off" : 'On'}
      <button style={button} onClick={handleClick}>Flip</button>
      </div>
    </div>
  );
}

export default App;

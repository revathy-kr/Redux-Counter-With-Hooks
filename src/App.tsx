import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCountAction, incrementCountAction } from './actions/countActions';
import { setNameAction } from './actions/nameActions';
import './App.css';
import { CountActions } from './actions/countActions';
import { NameActions } from './actions/nameActions';
import { AppState } from './reducers';

const App = () => {
  const { count } = useSelector((state: AppState) => state.count);
  const { name } = useSelector((state: AppState) => state.name);

  const countDispatch = useDispatch<Dispatch<CountActions>>();
  const nameDispatch = useDispatch<Dispatch<NameActions>>();

  const handleIncrement = () => (countDispatch({ type: 'INCREMENT' }));

  const handleDecrement = () => (countDispatch({ type: 'DECREMENT' }));

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameDispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  return (
    <div>
      <div>
        <button onClick={handleIncrement}>+</button>
        {count}
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <input type="text" onChange={handleSetName} />
        {name}
      </div>
    </div>
  );
};

export default App;

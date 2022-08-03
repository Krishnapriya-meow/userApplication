import './App.css';
import { Dashboard } from './Component/Dashboard';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {  USERINFORMATION, usersReducer } from './Container/UsersSlice';

function App() {

  const store = configureStore({
    reducer: combineReducers({
      [USERINFORMATION]: usersReducer
    })
  });
  return (
    <div className="App">
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </div>
  );
}

export default App;

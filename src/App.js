import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Notes App</h1>
        <AddNote />
        <NotesList />
      </div>
    </Provider>
  );
}

export default App;

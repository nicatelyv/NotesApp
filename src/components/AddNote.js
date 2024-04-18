import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/notesActions';

const AddNote = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch(addNote({ id: Date.now(), text, pinned: false }));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;

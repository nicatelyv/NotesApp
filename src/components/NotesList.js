import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateNote, deleteNote, pinNote } from '../actions/notesActions';
import './style.scss';

const NoteList = () => {
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleUpdate = (id, newText) => {
    dispatch(updateNote(id, newText));
  };

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handlePin = (id) => {
    dispatch(pinNote(id));
  };

  const pinnedNotes = notes.filter(note => note.pinned);
  const unpinnedNotes = notes.filter(note => !note.pinned);

  return (
    <ul className="note-list">
      {pinnedNotes.map(note => (
        <li key={note.id} className={`note-item ${note.pinned ? 'pinned' : ''}`}>
          <textarea
            className="note-textarea"
            value={note.text}
            onChange={(e) => handleUpdate(note.id, e.target.value)}
            rows={6}
            cols={50}
          />
          <div className="actions">
            <button className="pin-button" onClick={() => handlePin(note.id)}>
              {note.pinned ? 'Unpin' : <i className="fa-solid fa-thumbtack"></i>}
            </button>
            <button className="delete-button" onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        </li>
      ))}

      {unpinnedNotes.map(note => (
        <li key={note.id} className={`note-item ${note.pinned ? 'pinned' : ''}`}>
          <textarea
            className="note-textarea"
            value={note.text}
            onChange={(e) => handleUpdate(note.id, e.target.value)}
            rows={6}
            cols={50}
          />
          <div className="actions">
            <button className="pin-button" onClick={() => handlePin(note.id)}>
              {note.pinned ? 'Unpin' : <i className="fa-solid fa-thumbtack"></i>}
            </button>
            <button className="delete-button" onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
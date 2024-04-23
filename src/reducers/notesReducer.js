export const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) || []
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      const updatedNotes = [...state.notes, action.payload];
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return {
        ...state,
        notes: updatedNotes
      };
    case 'UPDATE_NOTE':
      const updated = state.notes.map(note =>
        note.id === action.payload.id ? { ...note, text: action.payload.newText } : note
      );
      localStorage.setItem('notes', JSON.stringify(updated));
      return {
        ...state,
        notes: updated
      };
    case 'DELETE_NOTE':
      const filtered = state.notes.filter(note => note.id !== action.payload);
      localStorage.setItem('notes', JSON.stringify(filtered));
      return {
        ...state,
        notes: filtered
      };
    case 'PIN_NOTE':
      const pinned = state.notes.map(note =>
        note.id === action.payload ? { ...note, pinned: !note.pinned } : note
      );
      localStorage.setItem('notes', JSON.stringify(pinned));
      return {
        ...state,
        notes: pinned
      };
    default:
      return state;
  }
};

export default noteReducer;
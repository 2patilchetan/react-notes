import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, SELECT_NOTE } from './actions';

const initialState = {
  notes: [],
  selectedNote: -1
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_NOTE:
      return { ...state, selectedNote: action.id };
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content
          }
        ]
      };
    case EDIT_NOTE:
      let notes = [...state.notes]
      notes[action.id] = {
        title: action.title,
        content: action.content
      }
      return {
        ...state,
        notes: notes,
        selectedNote: -1
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note, index) => index !== action.id),
        selectedNote: (state.selectedNote - 1)
      };

    default:
      return state;
  };
}

export default rootReducer;
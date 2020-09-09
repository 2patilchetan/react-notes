export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';
const APIURL = 'https://httpbin.org/';
export function addNote(title, content) {
  return (dispatch) => {
    fetch(`${APIURL}post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })
      .then(() => {
        // Not using response since its dummy and test
        dispatch({ type: ADD_NOTE, title, content });
      })
      .catch(() => {
        // keeping this bank. Here we can show toast error message to user
      });
  };
}

export function editNote(id, title, content) {
  return (dispatch) => {
    fetch(`${APIURL}put`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        title,
        content,
      }),
    })
      .then(() => {
        // Not using response since its dummy and test
        dispatch({
          type: EDIT_NOTE,
          id,
          title,
          content,
        });
      })
      .catch(() => {
        // keeping this bank. Here we can show toast error message to user
      });
  };
}

export function removeNote(id) {
  return (dispatch) => {
    fetch(`${APIURL}delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then(() => {
        // Not using response since its dummy and test
        dispatch({
          type: REMOVE_NOTE,
          id,
        });
      })
      .catch(() => {
        // keeping this bank. Here we can show toast error message to user
      });
  };
}

export function selectNote(note) {
  return { type: SELECT_NOTE, ...note };
}

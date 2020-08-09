const INITIAL_STATE = { idx: 0, memes: [] };
//topText, botText,img, id
function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      let newMeme = { ...action.payload, id: state.idx };
      return { ...state, memes: [...state.memes, newMeme], idx: state.idx + 1 };
    case "REMOVE":
      console.log(action.payload.id);
      let newMemes = state.memes.filter((m) => m.id !== action.payload.id);
      return { ...state, memes: newMemes };
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);

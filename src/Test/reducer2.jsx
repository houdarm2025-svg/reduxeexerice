const initialState = {
  items: [] // <-- bien initialisé en tableau
};

const reducer2 = (state = initialState, action) => {
  switch(action.type) {
    case "addItem":
      return { ...state, items: [...state.items, action.payload] };

    case "DELETE_ITEM":
      return { ...state, items: state.items.filter((_, i) => i !== action.payload) };

    default:
      return state;
  }
};

export default reducer2;

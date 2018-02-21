const defaultState = {
  page: 'books',
};

const navigation = (state = defaultState, action) => {
  switch (action.type) {
    case 'SWITCH_PAGE': return {
      ...state,
      page: action.payload,
    };

    default: return state;
  }
};

export default navigation;

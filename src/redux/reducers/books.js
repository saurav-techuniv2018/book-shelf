const defaultState = {
  groups: [],
};

const books = (state = defaultState, action) => {
  switch (action.type) {
    case 'PUT_GROUPED_BOOKS': {
      const groupsObject = action.payload;
      const groups = [];
      Object.keys(groupsObject).forEach(key => groups.push({
        author: key,
        books: groupsObject[key],
      }));

      return {
        ...state,
        groups,
      };
    }
    default:
      return state;
  }
};

export default books;

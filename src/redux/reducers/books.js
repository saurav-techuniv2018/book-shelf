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
    case 'TOGGLE_LIKE': {
      return {
        ...state,
        groups: state.groups.map((group) => {
          if (group.author !== action.payload.author) return group;

          return {
            ...group,
            books: group.books.map((book) => {
              if (book.id !== action.payload.id) return book;

              return {
                ...book,
                like: action.payload.like,
              };
            }),
          };
        }),
      };
    }
    default:
      return state;
  }
};

export default books;

import React from 'react';

import Shelf from '../shelf-row';

const App = () => (
  <div className="App">
    <Shelf group={{
        author: 'JK Rowling',
        books: [
          {
            id: 2,
            name: 'Harry Potter',
            author: 'JK Rowling',
            rating: 3,
            like: false,
          },
        ],
      }}
    />
  </div>
);

export default App;

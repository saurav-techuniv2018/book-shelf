import React from 'react';

import Shelf from '../shelf';

const App = () => (
  <div className="App">
    <Shelf groups={
      [
        {
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
        },
      ]
    }
    />
  </div>
);

export default App;

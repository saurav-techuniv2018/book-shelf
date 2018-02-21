import React from 'react';

import Header from '../header';
import Shelf from '../shelf';

const App = () => (
  <div className="App">
    <Header
      before="The"
      value="Book"
      after="Shelf"
    />
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

import React from 'react';
import { connect } from 'react-redux';

import Header from '../header';
import Shelf from '../shelf';
import httpRequest from '../../lib/data-fetch';
import actionGenerator from '../../redux/actions';

class App extends React.Component {
  static mapStateToProps = state => ({
    groups: state.books.groups,
  });

  static mapDispatchToProps = dispatch => ({
    putBooks: groupedBooks => dispatch(actionGenerator('PUT_GROUPED_BOOKS', groupedBooks)),
  });

  componentDidMount() {
    httpRequest('/books/likes', 'GET')
      .then((responseData) => {
        if (Object.keys(responseData.data.groups).length === 0) {
          httpRequest('/books', 'POST')
            .then((externalApiCallResult) => {
              if (externalApiCallResult.statusCode === 200) {
                httpRequest('/books/likes', 'GET')
                  .then((groupedBooksData) => {
                    this.props.putBooks(groupedBooksData.data.groups);
                  });
              }
            });
        } else {
          const groupedBooksData = responseData.data.groups;
          this.props.putBooks(groupedBooksData);
        }
      });
  }

  render = () => (
    <div className="App">
      <Header
        before="The"
        value="Book"
        after="Shelf"
      />
      <Shelf groups={this.props.groups} />
    </div>
  );
}

export default connect(App.mapStateToProps, App.mapDispatchToProps)(App);

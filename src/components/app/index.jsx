import React from 'react';
import { connect } from 'react-redux';

import Header from '../header';
import Shelf from '../shelf';
import Warning from '../warning';
import httpRequest from '../../lib/data-fetch';
import actionGenerator from '../../redux/actions';

import './app.css';

class App extends React.Component {
  static mapStateToProps = state => ({
    groups: state.books.groups,
    page: state.navigation.page,
  });

  static mapDispatchToProps = (dispatch, ownProps) => ({
    switchPage: page => dispatch(actionGenerator('SWITCH_PAGE', page)),
    putBooks: groupedBooks => dispatch(actionGenerator('PUT_GROUPED_BOOKS', groupedBooks)),
  });

  constructor(props) {
    super(props);

    this.checkBooks = () => {
      httpRequest('/books/likes', 'GET')
        .then((responseData) => {
          if (Object.keys(responseData.data.groups).length === 0) {
            this.props.switchPage('WARNING');
          } else {
            this.props.putBooks(responseData.data.groups);
            this.props.switchPage('SHELF');
          }
        });
    };
  }

  componentDidMount = () => {
    this.checkBooks();
  }

  render = () => (
    <div className="App">
      <div className="App-header">
        <Header
          before="The"
          value="Book"
          after="Shelf"
        />
      </div>
      <div className="App-main">
        {
          (this.props.page === 'WARNING') ?
            <Warning
              value={'Oops! No books found! \nImport them now?'}
              className="App-warning"
              onClick={() => {
                httpRequest('/books', 'POST')
                  .then((data) => {
                    if (data.statusCode === 200) {
                      this.checkBooks();
                    }
                  });
              }}
            />
            :
            <Shelf groups={this.props.groups} />
        }
      </div>
    </div>
  );
}

export default connect(App.mapStateToProps, App.mapDispatchToProps)(App);

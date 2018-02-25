import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Header from '../header';
import Shelf from '../shelf';
import Warning from '../warning';
import SideBar from '../side-bar';
import httpRequest from '../../lib/data-fetch';
import actionGenerator from '../../redux/actions';

import './app.css';
import shelf from '../../models/shelf';

class App extends React.Component {
  static mapStateToProps = state => ({
    groups: state.books.groups,
    page: state.navigation.page,
  });

  static mapDispatchToProps = dispatch => ({
    switchPage: page => dispatch(actionGenerator('SWITCH_PAGE', page)),
    putBooks: groupedBooks => dispatch(actionGenerator('PUT_GROUPED_BOOKS', groupedBooks)),
  });

  componentDidMount = () => {
    this.checkBooks();
  }

  checkBooks = () => {
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

  render = () => (
    <div className="App">
      <div className="App-nav" >
        <SideBar
          brand="bs"
          icons={
            [
              { icon: '\uE5D5' },
              { icon: '\uE8B8' },
            ]
          }
        />
      </div>
      <div className="App-content-root">
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
    </div>
  );
}

App.propTypes = {
  switchPage: PropTypes.func.isRequired,
  putBooks: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.shape(shelf)).isRequired,
};

export default connect(App.mapStateToProps, App.mapDispatchToProps)(App);

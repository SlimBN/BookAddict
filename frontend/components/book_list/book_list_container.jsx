import React from 'react';
import { connect } from 'react-redux';
import BookList from './book_list';
import { fetchBooksSummary } from '../../actions/book_actions';

const mapStateToProps = (state) => {
  return {
    booksSummary: state.booksSummary
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooksSummary: (bookshelfId = null) => {
      // debugger;
      dispatch(fetchBooksSummary(bookshelfId));
    }
  };
};

const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListContainer;

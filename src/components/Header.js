import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const { changeFilter } = actions;

const Header = ({ changeFilter }) => {
  const handleFilterChange = filter => changeFilter(filter);
  return(
    <header>
    <h3>Bookstore CMS</h3>
    <CategoryFilter changeFilter={handleFilterChange} />
    </header>
  );
}

Header.propTypes = {
  changeFilter: PropTypes.func,
};

Header.defaultProps = {
  changeFilter: () => null,
};

const mapDisptachToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(null, mapDisptachToProps)(Header);

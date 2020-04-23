import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import CategoryFilter from './CategoryFilter';

const { changeFilter } = actions;

const Header = ({ changeFilter }) => {
  const handleFilterChange = filter => changeFilter(filter);
  return (
    <header>
      <div className="header-group">
        <h3>Bookstore CMS</h3>
        <h5>BOOK</h5>
        <CategoryFilter changeFilter={handleFilterChange} />
      </div>
    </header>
  );
};

Header.propTypes = {
  changeFilter: PropTypes.func,
};

Header.defaultProps = {
  changeFilter: () => null,
};

const mapDisptachToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(null, mapDisptachToProps)(Header);

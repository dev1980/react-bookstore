import React from 'react';
import Proptypes from 'prop-types';
import categories from '../utils/bookCategories';

const CategoryFilter = ({ changeFilter }) => (
  <select onChange={e => changeFilter(e.target.value)} className="header-select">
    {['CATEGORIES', ...categories].map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  changeFilter: Proptypes.func,
};

CategoryFilter.defaultProps = {
  changeFilter: () => null,
};

export default CategoryFilter;

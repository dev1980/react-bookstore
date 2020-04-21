import React from 'react';
import categories from '../utils/bookCategories';

const CategoryFilter = ({ changeFilter }) => (
  <select onChange={(e) => changeFilter(e.target.value)}>
    <option>All</option>
    {categories.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

export default CategoryFilter;

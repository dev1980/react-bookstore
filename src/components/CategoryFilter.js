import React from 'react';
import categories from '../utils/bookCategories';

const CategoryFilter = () => (
  <select name="category">
    <option>All</option>
    {categories.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

export default CategoryFilter;

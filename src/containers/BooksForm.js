import React from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <form>
      <input type="text" placeholder="Title" />
      <select>
        <option disabled selected>
          Please Select Category
        </option>
        {categories.map(category => (
          <option value={category} key={Math.random() * 5}>
            {category}
          </option>
        ))}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};

export default BooksForm;

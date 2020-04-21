import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: null,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
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
        <input type="text" placeholder="Title" name="title" onChange={this.handleChange} />
        <select name="category" onChange={this.handleChange}>
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
  }
 
};

export default BooksForm;

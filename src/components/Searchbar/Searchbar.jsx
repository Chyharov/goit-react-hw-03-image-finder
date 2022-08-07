import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    text: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.reset();
  };
  
  onHadleChange = e => {
    const query = e.target.value.trim();
    this.setState({ text: query });
  };


  reset = () => this.setState({ text: '' });

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}></span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.text}
            onChange={this.onHadleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

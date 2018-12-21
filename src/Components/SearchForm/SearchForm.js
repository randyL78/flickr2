// React libraries
import React from 'react';

// Library for styling React components inside of component itself
import styled from 'styled-components';

/* Create styles for sub elements */
const Form = styled.form `
  max-width: 460px;
  display: flex;
  margin: 0 auto 32px;
`;

const SearchButton = styled.button `
  outline: none;
  background-color: #438bbd;
  border: none;
  padding: 0px 15px;
  border-radius: 0 0.35em 0.35em 0;
  cursor: pointer;
  &:hover {
    background-color: #275270;
  }
`;

const SearchInput = styled.input `
  font-size: 1em;
  width: 100%;
  background-color: #edeff0;
  padding: 10px 15px;
  border: 3px solid #d7dbdf;
  border-right: none;
  border-radius: 0.35em 0 0 0.35em;
  outline: none;
`;

/**
 * SearchForm component to prompt user to enter a search term
 * to use in Flickr API
 */
const SearchStateless = props =>  
  <Form className="search-F" onSubmit={ e => props.handleSubmit(e, this.searchField, props.history) }>
    <SearchInput type="search" name="search" placeholder="Search" required innerRef={ input => this.searchField = input} />
    <SearchButton type="submit">
      <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </SearchButton>
  </Form>
;

export default SearchStateless;

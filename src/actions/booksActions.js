"use strict"

//Get books
export function getBooks(book) {
  return {
    type:'GET_BOOK'
  };
}

//Post a Book
export function postBooks(book){
  return {
    type:'POST_BOOK',
    payload: book
  };
}

//Delete a book

export function deleteBooks(id){
  return {
    type: 'DELETE_BOOK',
    payload: id
  };
}
//Update a book
export function updateBooks(book){
  return {
    type: 'UPDATE_BOOK',
    payload: book
  };
}

'use strict'

//step3 define reducers
export function bookReducers (state={books:[
  {
    id : 1,
    title: 'React-Redux',
    description: 'How to create a web app using react and redux',
    price: 225
  },
  {
    id : 2,
    title: 'Nodejs Tutorial',
    description: 'To learn about Nodejs',
    price: 173
  }
]}, action) {

  switch(action.type){
    case 'GET_BOOK' :
      // let books = state.books.concat(action.payload);
      return {...state, books: [...state.books]};
    break;
    case 'POST_BOOK' :
      // let books = state.books.concat(action.payload);
      return {books:[...state.books, ...action.payload]};
    break;
    case 'DELETE_BOOK' :
      // let books = state.books.concat(action.payload);
      const currentBookToDelete = [...state.books];

      const IndexToDelete = currentBookToDelete.findIndex(
        (book) => {
          return book.id === action.payload.id;
        }
      )
      return {books:[...currentBookToDelete.slice(0, IndexToDelete), ...currentBookToDelete.slice(IndexToDelete+1)]};
    break;
  case 'UPDATE_BOOK' :
    const currentBooksToUpdate = [...state.books];

    const indexToUpdate = currentBooksToUpdate.findIndex(
      (book) => {
        return book.id === action.payload.id;
      }
    )
    const newBookToUpdate = {
      // ...currentBooksToUpdate[indexToUpdate],
      title: action.payload.title,
      description: action.payload.description,
      price: action.payload.price,
    }

    console.log("New Book details that updated:", newBookToUpdate);

    return {books: [...currentBooksToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBooksToUpdate.slice(indexToUpdate+1)]};
    break;
  }
  return state;
}

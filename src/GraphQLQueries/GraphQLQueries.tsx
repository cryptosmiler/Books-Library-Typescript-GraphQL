import { gql } from '@apollo/client'

export const GET_ALL_BOOKS = gql`
  query {
    books {
      name
      id
    }
  }
`

export const GET_ALL_AUTHORS = gql`
  query {
    authors {
      name
      id
    }
  }
`

export const GET_BOOK = gql`
  query ($bookID: ID!) {
    book(id: $bookID) {
      name
      genre
      author {
        name
        books {
          name
        }
      }
    }
  }
`

export const ADD_AUTHOR = gql`
  mutation ($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`

export const ADD_BOOK = gql`
  mutation ($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`

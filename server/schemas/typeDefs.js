const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type me{
        me:User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: SaveBookInput): User
        removeBook(bookID: ID!): User
    }

    input saveBooks {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
`
module.exports = typeDefs;

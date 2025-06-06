export const typeDefs = `#graphql

    type Author{
        id:ID!
        name: String!
        books: [Book] 
    }

    type Book{
        id:ID!
        title:String!
        publishedYear:Int
        author: Author
    }

    type Query{
        authors: [Author]
        books: [Book]
    }
    
    type Mutation{
    addBook(title: String!, publishedYear:Int, authorId:ID!):Book!
    }
`;

//all the methods that needs to be called in terms of Get the data has to be written under Query.
//all the methods which has to be called in order to Update the data has to be under Mutation.
//mandatory fields should be written as ID! (exclamation)
//In this file, we have defined our schema

const express = require('express');
const { graphqlHTTP: expressGraphQL } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening at http://localhost:4000');
})
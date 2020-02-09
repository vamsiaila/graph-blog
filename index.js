const express = require('express');
const {json} = require('body-parser');
const graphqlHTTP = require('express-graphql');
const app = express();
const mongoose = require('mongoose');
const schema = require('./schemas');

app.use(json());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// mongoose.connect('mongodb+srv://grapher:rapidops123456@grapher-pwytq.mongodb.net/graph_blog?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost:27017/graph-blog', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('MongoDB Connected');
    app.listen(8080, () => console.log('graphing on port 8080'));
});

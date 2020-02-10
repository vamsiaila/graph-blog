const express = require('express');
const {json} = require('body-parser');
const graphqlHTTP = require('express-graphql');
const app = express();
const mongoose = require('mongoose');
const schema = require('./schemas');
const port = process.env.PORT;

app.use(json());
app.get('/', (req, res) => res.send({ message: 'graphql server is running like a cheetah' }));
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

mongoose.connect('mongodb+srv://grapher:rapidops123456@grapher-pwytq.mongodb.net/graph_blog?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/graph-blog', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('MongoDB Connected');
    app.listen(port, () => console.log(`graphing on port ${port}`));
});

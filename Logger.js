module.exports = (req, res, next) => {
    res.send = (data) => {
        res.write(data);
        res.end();
        // const query = req.body.query;
        // const queryType = query.startsWith('\nmutation') ? 'mutation' : 'query';
        // const queries = query.split('{\n').map(x => x.replace(/[\n}]/g, '')).filter(Boolean).map(x => x.trim());
        // if(queries[0].trim() === 'mutation' || queries[0].trim() === 'query') {
        //     queries.shift()
        // }
        // console.log(queryType);
        // console.log(queries);
    };
    next();
};

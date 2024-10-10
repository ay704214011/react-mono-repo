const responseHeader = (_, res, next) => {
    res.append('Content-Type', 'application/json');
    res.append('Custom-Header', 'CustomHeaderValue');
    next();
};

module.exports = responseHeader;
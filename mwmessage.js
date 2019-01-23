module.exports = (io) => {
    var iolocal = io;
    return (req, res, next) => {
        console.log('Aktualisiert euch', req.method);
        if (req.method === 'POST' ||
            req.method === 'PUT' ||
            req.method === 'DELETE')
            iolocal.emit('playerrefresh', req.method);
        next()
    }
};
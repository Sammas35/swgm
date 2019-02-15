module.exports = (io) => {
    let iolocal = io;
    return (req, res, next) => {
        if (req.method === 'POST' ||
            req.method === 'PUT' ||
            req.method === 'DELETE') {
            console.log('Aktualisiert euch', req.method);
            iolocal.emit('playerrefresh', req.method);
        }
        next()
    }
};
if (process.env.NODE_NEV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
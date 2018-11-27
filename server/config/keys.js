if (process.env.PORT === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
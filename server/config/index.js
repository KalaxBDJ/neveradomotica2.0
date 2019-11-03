require('./init');

exports.port = process.env.PORT;
exports.mondodbURL = process.env.MONGODB_URL;
exports.fromNumber = process.env.FROM_NUMBER;
exports.toNumber = process.env.TO_NUMBER;
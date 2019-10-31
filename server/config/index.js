require('./init');

exports.port = process.env.PORT;
exports.mondodbURL = process.env.MONGODB_URL;
exports.accountSid = process.env.ACCOUNT_SID;
exports.authToken = process.env.AUTH_TOKEN;
exports.fromNumber = process.env.FROM_NUMBER;
exports.toNumber = process.env.TO_NUMBER;
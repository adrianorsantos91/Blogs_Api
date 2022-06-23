const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'akldhkjladadhjksvdhj';
// https://datatracker.ietf.org/doc/html/rfc7519#section-4.1
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const generateJWTToken = (payload) =>
    jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = async (token) => {
    if (!token) {
        const notFoundToken = { status: 401, message: 'Sem Token' };
        throw notFoundToken;
    }

    try {
        const introspection = await jwt.verify(token, SECRET, jwtConfig);
        return introspection;
    } catch (e) {
        console.log('error', e.message);
        const tokenInvalid = { status: 401, message: 'token inválido' };
        throw tokenInvalid;
    }
};

module.exports = {
    generateJWTToken,
    authenticateToken,
};

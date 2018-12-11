module.exports = {
    'port': process.env.PORT || 8081,
    'database': 'mongodb://orelviacheslav:qwerty123@ds131983.mlab.com:31983/db-shaperex',
    'corsOptions': {
        origin: 'http://localhost:3000',
        preflightContinue: true,
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    },
    'secret': 'verystrongpassword'
};
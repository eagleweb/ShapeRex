module.exports = {
    'port': process.env.PORT || 8081,
    'database': 'mongodb://orelviacheslav:qwerty123@ds131983.mlab.com:31983/db-shaperex',
    'corsOptions': {
        origin: 'http://localhost:3000',
        preflightContinue: true,
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    },
    'secret': 'verystrongpassword',
    'googleMapURL': "https://maps.googleapis.com/maps/api/js?key=AIzaSyAUEyNoJ4_Qd5D7LvPL1vkog8FdraVqBao&v=3.exp"
};
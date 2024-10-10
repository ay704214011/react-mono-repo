const whiteListDomains = ['http://localhost:3000', undefined];
const corsOptions = {
   origin: function (origin, callback) {
      console.log('origin ', origin);
      if (whiteListDomains.indexOf(origin) > -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'));
      }
   }
};
module.exports = corsOptions;
const mogoose = require('mongoose');

const mongodbURL = process.env.URL;

const databaseConnectionFunction = function (callback) {
   mogoose
      .connect(`mongodb://mongodb:27017/MERN`)
      .then((res) => {
         callback();
         console.log('database conneted');
      })
      .catch((err) => {
         console.log(err);
      });
};

module.exports = databaseConnectionFunction;

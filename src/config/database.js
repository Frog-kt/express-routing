const DB_LOCAL_URI = process.env.DB_LOCAL_URI || 'mongodb://localhost:27017/example';

const mongoose = require('mongoose');

const connectDatabase = () => {
   mongoose.connect(DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
   }).then(con => {
      console.log(`MongoDB Database connected with host: ${con.connection.host}`);
   })
};

module.exports = connectDatabase;
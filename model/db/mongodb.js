/** Packages */

// importar el paquete de mongoose npm i mongoose --save -D
const mongoose = require('mongoose');
// importar el paquete de config npm i config --save -D
const config = require('config');

// Congiguración
const mongodbInfo = config.get('db-connections.mongodb');
const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;

// Función para conectar a la base de datos
modulo.exports = () => {
  mongoose.connect(connStr);

  mongoose.connection.on('connected', () => {
    console.log('mongodb is connected');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('mongodb is disconnected');
  });

  mongoose.connection.on('error', () => {
    console.log('mongodb connection error');
  });

  mongoose.connection.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('mongodb is disconnected by app termination');
    });
  });
};

import mongoose from 'mongoose';

export default async function connect() {
  try {
    // mongoose.connect(process.env.DATABASE_URL);
    mongoose.connect(
      'mongodb+srv://rjha15363:ashjha90@cluster0.bu7tejm.mongodb.net/databaseNext1'
    );

    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });
    connection.on('error', (err) => {
      console.log('MongoDB is not  connected ');
      console.error(err);
      process.exit();
    });
  } catch (err) {
    console.log('Something Went Wrong..');
    console.error(err.message);
  }
}

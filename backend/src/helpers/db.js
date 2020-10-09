const mongoose = require("mongoose")

const database_url = process.env.DATABASE_URL
console.log(database_url)

const connect = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(
        database_url,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      console.log("Database Connected")
    } else {
      console.log("Database Already Connected")
    }
    return true
  } catch (err) {
    console.error("Error : Cannot connect to Database " + err)
    return false
  }
}

const truncate = async () => {
  if (mongoose.connection.readyState !== 0) {
    const { collections } = mongoose.connection;

    const promises = Object.keys(collections).map(collection =>
      mongoose.connection.collection(collection).deleteMany({})
    );

    await Promise.all(promises);
  }
};

const disconnect = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
};

module.exports = {
  connect,
  truncate,
  disconnect
}

module.exports = {
  // mongoURI: "mongodb://localhost:27017/flappybee", // local
  mongoURI: process.env.REACT_APP_MONGODB_URL, // compass
  secretOrKey: "secret",
};

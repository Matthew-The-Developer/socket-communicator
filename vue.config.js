module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/socket-communicator/" : "/",
  transpileDependencies: [
    'vuetify'
  ]
}

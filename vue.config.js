module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/socket-communicator/" : "/",
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Socket Coms',
    themeColor: '#ffffff'
  }
}

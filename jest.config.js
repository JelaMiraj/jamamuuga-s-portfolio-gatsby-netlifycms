module.exports = {
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  setupFiles: [
    'raf/polyfill',
    '<rootDir>/jest.setup.js',
  ],
}

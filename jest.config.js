module.exports = {
  // collectCoverageFrom: [
  //   "src/**/*.js",
  // ],
  // globals: {
  //   __PATH_PREFIX__: "",
  // },
  // moduleNameMapper: {
  //   ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
  //   ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  // },
  resolver: require.resolve("jest-pnp-resolver"),
  setupFiles: [
    // "<rootDir>/scripts/loader-shim.js",
    // "raf/polyfill",
  ],
  setupFilesAfterEnv: [
    // "<rootDir>/scripts/setupTests.js",
    // "<rootDir>/scripts/jest.setup.js",
    "jest-enzyme",
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "enzyme",
  testPathIgnorePatterns: ["node_modules", "/.cache/"],
  // transform: {
  //   "^.+\\.jsx?$": "<rootDir>/jest-preprocess.js",
  // },
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
}

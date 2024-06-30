module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/svgMock.js',
    '\\.(jpg|jpeg|png|gif|svg)$': 'identity-obj-proxy',
  },
}
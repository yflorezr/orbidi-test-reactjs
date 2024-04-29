module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
  },
  // otras opciones...
};
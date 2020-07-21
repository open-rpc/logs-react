module.exports = {
  clearMocks: true,
  coverageDirectory: '../coverage',
  resetMocks: true,
  restoreMocks: true,
  rootDir: './src',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  files: ["src/**/*.ts"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ]
};

// This the Redwood root jest config
// Each side, e.g. ./web/ and ./api/ has specific config that references this root
// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

module.exports = {
  rootDir: '.',
  projects: ['<rootDir>/{*,!(node_modules)/**/}/jest.config.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'web/src/**/*.{js,jsx,ts,tsx}',
    'api/src/**/*.{js,jsx,ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
  ],
}

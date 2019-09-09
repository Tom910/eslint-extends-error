module.exports = {
  parser: 'babel-eslint',
  extends: ['./ts.config.js'],
  plugins: ['babel'],
  rules: {
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }]
  },
};

module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel'],
  rules: {
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }]
  },
};

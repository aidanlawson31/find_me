// ES Modules syntax
import Unsplash from 'unsplash-js';

// require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  applicationId: "0b3e857f44e4f9a29ca40193a63b1fdf9fd2f9549824dbab22a4118e85103fa8",
  secret: "7679df0a367a2c5b9b7133d2b148b69a8b317ea81a7bc5db59e641117de70256"
});

module.exports = {unsplash};

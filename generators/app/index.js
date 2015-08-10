var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function() {

    generators.Base.apply(this, arguments);

    this.option('less');
    this.option('gulp');
    this.option('handlebars');
    this.option('babel');
  },

  method1: function() {
    console.log('method 1');
  },

  method2: function() {
    console.log('method 2');
  }

});
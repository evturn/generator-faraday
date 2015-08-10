var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);

    this.option('less');
    this.option('gulp');
    this.option('handlebars');
    this.option('babel');
  }
});
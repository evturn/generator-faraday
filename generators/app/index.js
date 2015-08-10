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
  },

  prompting: function () {
    var done = this.async();

    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Project name',
      default : this.appname

    }, function (answers) {

      this.log(answers.name);
      done();

    }.bind(this));
  }

});
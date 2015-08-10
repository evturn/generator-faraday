var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

  constructor: function() {

    generators.Base.apply(this, arguments);

    this.argument('appname', {
      type     : String,
      required : true

    });
    this.appname = _.camelCase(this.appname);


    this.option('less');
    this.scriptSuffix = (this.options.less ? ".less" : ".css");
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
'use strict';
var generators = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('lodash');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);

  },

  prompting: function () {
    var done = this.async();

    this.log(
      chalk.red('Faraday') + ', generator for the 20th Century.'
    );
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Project name',
      default : this.appname
    }, function (props) {
      this.log(props.name + ' it is.');
      this.projectName = props.name;
      done();
    }.bind(this));
  },

  makeDirectories: function() {
    mkdirp.sync(this.projectName, function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/dist', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/dist/js', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/dist/css', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/dist/fonts', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/dist/img', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/views', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/views/layouts', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/views/partials', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/config', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/routes', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/assets', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/assets/fonts', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/assets/img', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/assets/less', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/assets/less/base', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/assets/less/vendor', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/assets/less/partials', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/assets/js', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
    mkdirp.sync(this.projectName + '/assets/js/vendor', function (err, made) {
      if (err) console.error(err)
      else console.log('Created ' + made);
    });
  },

  _onError: function () {
    this.log('I think I ate something funny.');
  }
});

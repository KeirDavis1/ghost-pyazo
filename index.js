'use strict';

var Promise = require('bluebird')
var BaseAdapter = require('ghost-storage-base');
var Request = require("request");

class PyazoAdapter extends BaseAdapter {
  constructor(config) {
    super();

    this.config = config;
  }

  exists() {
    return Promise.resolve(true);
  }

  save() {
    return Promise.reject("Not implemented");
  }

  serve() {
    return function customServe(req, res, next) {
      next();
    }
  }

  delete() {
    return Promise.reject("Not implemented");
  }

  read() {
    return Promise.reject("Not implemented");
  }
}

module.exports = PyazoAdapter;

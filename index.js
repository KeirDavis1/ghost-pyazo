'use strict';

var Promise = require('bluebird')
var BaseAdapter = require('ghost-storage-base');
var RequestPromise = require('request-promise');
var fs = require('fs');

class PyazoAdapter extends BaseAdapter {
  constructor(config) {
    super();

    this.config = config;
  }

  exists() {
    return Promise.resolve(true);
  }

  save(image) {
    var formData = {
      imagedata: fs.createReadStream(image),
      username: this.username,
      id: "foo"
    };

    return RequestPromise.post({ url: this.uploadEndpoint, formData: formData })
      .then(function successCallback(response) {
        console.log(response);
        return "http://good.com/img.svg"
      }, function failedCallback(response){
        console.error(response);
        return "http://error.com/img.svg"
      });
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

  }
}

module.exports = PyazoAdapter;

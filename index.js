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
      imagedata: {
        value: fs.createReadStream(image.path),
        options: {
          filename: image.name,
          contentType: image.mimetype
        }
      },
      id: "foo"
    };

    var options = {
      method: 'POST',
      uri: this.config.uploadEndpoint,
      formData: formData,
      resolveWithFullResponse: true
    };

    return RequestPromise(options)
      .then(function successCallback(response) {
        return response.body;
      }, function failedCallback(response){
        console.error("FAILED" + response);
        Promise.reject(response);
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

'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 'success',
      'message': 'get',
      'data': values
  };
  res.status(200)
  res.json(data);
  res.end();
};

exports.fail = function(values, res) {
    var data = {
        'status': 'failed',
        'message': 'get',
        'data': values
    };
    res.status(400)
    res.json(data);
    res.end();
  };
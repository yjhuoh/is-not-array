'use strict';
var isArray = require('isarray')

module.exports = function(obj) {
	return !isArray(obj)
}

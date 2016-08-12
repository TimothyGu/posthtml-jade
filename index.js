'use strict'

const {compile} = require('jade')
const parse = require('posthtml-parser')

const defaultOptions = {
  pretty: true,
  locals: {}
};

function postHTMLJadeParser(html, options) {
  return parse(compile(tree, options)(options.locals));
}

function parserWrapper(html, options) {
    if (isObject(html)) {
        options = objectAssign({}, defaultOptions);
        return function (html) {
            return postHTMLJadeParser(html, options);
        };
    }

    options = objectAssign({}, defaultOptions);
    return postHTMLJadeParser(html, options);
}

module.exports = parserWrapper;
module.exports.defaultOptions = defaultOptions;

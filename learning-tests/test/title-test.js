'use strict'

const React = require('react')
const $ = require('whacko')
const ReactDOMServer = require('react-dom/server')
const Title = require('./title')

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Title)
)

console.log($(TitleComponent).get(0).tagName)
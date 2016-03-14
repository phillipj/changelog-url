'use strict'

const tap = require('tap')
const changelog = require('../')

// pre io.js/Node.js merger
tap.equal(changelog.rawUrl('v0.12.7'), 'https://raw.githubusercontent.com/nodejs/node-v0.x-archive/v0.12.7/ChangeLog')
tap.equal(changelog.rawUrl('v0.10.40'), 'https://raw.githubusercontent.com/nodejs/node-v0.x-archive/v0.10.40/ChangeLog')

// post
tap.equal(changelog.rawUrl('v4.2.3'), 'https://raw.githubusercontent.com/nodejs/node/v4.2.3/CHANGELOG.md')
tap.equal(changelog.rawUrl('v0.12.9'), 'https://raw.githubusercontent.com/nodejs/node/v0.12.9/ChangeLog')
tap.equal(changelog.rawUrl('v0.10.41'), 'https://raw.githubusercontent.com/nodejs/node/v0.10.41/ChangeLog')

tap.throws(() => {
  changelog.rawUrl(12345)
})

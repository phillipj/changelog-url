'use strict'

const tap = require('tap')
const changelog = require('../')

// pre io.js/Node.js merger
tap.equal(changelog.githubUrl('v0.12.7'), 'https://github.com/nodejs/node-v0.x-archive/blob/v0.12.7/ChangeLog')
tap.equal(changelog.githubUrl('v0.10.40'), 'https://github.com/nodejs/node-v0.x-archive/blob/v0.10.40/ChangeLog')

// post merger
tap.equal(changelog.githubUrl('v4.2.3'), 'https://github.com/nodejs/node/blob/v4.2.3/CHANGELOG.md')
tap.equal(changelog.githubUrl('v0.12.9'), 'https://github.com/nodejs/node/blob/v0.12.9/ChangeLog')
tap.equal(changelog.githubUrl('v0.10.41'), 'https://github.com/nodejs/node/blob/v0.10.41/ChangeLog')

tap.throws(() => {
  changelog.githubUrl(12345)
})

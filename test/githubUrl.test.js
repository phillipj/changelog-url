'use strict'

const tap = require('tap')
const changelog = require('../')

tap.equal(changelog.githubUrl('v4.2.3'), 'https://github.com/nodejs/node/blob/v4.2.3/CHANGELOG.md')
tap.equal(changelog.githubUrl('v0.12.9'), 'https://github.com/nodejs/node/blob/v0.12.9/ChangeLog')
tap.equal(changelog.githubUrl('v0.12.7'), 'https://github.com/nodejs/node-v0.x-archive/blob/v0.12.7/ChangeLog')

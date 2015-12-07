'use strict'

const semver = require('semver')

function legacyRepo (version) {
  return semver.satisfies(version, '< 0.12.8') ? 'node-v0.x-archive' : 'node'
}

exports.rawUrl = (version) => {
  if (typeof version !== 'string') {
    throw new TypeError(`version argument must be a string, but a ${typeof version} was given`)
  }
  if (!version.startsWith('v')) {
    version = 'v' + version
  }

  return semver.satisfies(version, '>= 1.0.0')
    ? `https://raw.githubusercontent.com/nodejs/node/${version}/CHANGELOG.md`
    : `https://raw.githubusercontent.com/nodejs/${legacyRepo(version)}/${version}/ChangeLog`
}

exports.githubUrl = (version) => {
  if (typeof version !== 'string') {
    throw new TypeError(`version argument must be a string, but a ${typeof version} was given`)
  }
  if (!version.startsWith('v')) {
    version = 'v' + version
  }

  return semver.satisfies(version, '>= 1.0.0')
    ? `https://github.com/nodejs/node/blob/${version}/CHANGELOG.md`
    : `https://github.com/nodejs/${legacyRepo(version)}/blob/${version}/ChangeLog`
}

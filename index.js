'use strict'

const semver = require('semver')

function legacyRepo (version) {
  return semver.satisfies(version, '>= 0.10.41 < 0.11 || >= 0.12.8 < 0.13') ? 'node' : 'node-v0.x-archive'
}

function validateVersion (version) {
  if (typeof version !== 'string') {
    throw new TypeError(`version argument must be a string, but a ${typeof version} was given`)
  }

  return version.startsWith('v') ? version : `v${version}`
}

exports.rawUrl = (version) => {
  version = validateVersion(version)
  return semver.satisfies(version, '>= 1.0.0')
    ? `https://raw.githubusercontent.com/nodejs/node/${version}/CHANGELOG.md`
    : `https://raw.githubusercontent.com/nodejs/${legacyRepo(version)}/${version}/ChangeLog`
}

exports.githubUrl = (version) => {
  version = validateVersion(version)
  return semver.satisfies(version, '>= 1.0.0')
    ? `https://github.com/nodejs/node/blob/${version}/CHANGELOG.md`
    : `https://github.com/nodejs/${legacyRepo(version)}/blob/${version}/ChangeLog`
}

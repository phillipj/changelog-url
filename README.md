# changelog-url

[![Build Status](https://api.travis-ci.org/phillipj/changelog-url.png)](http://travis-ci.org/phillipj/changelog-url)

Resolve URLs to the Node.js changelog. Handles legacy versions of Node.js, aswell as io.js and todays Node.js.

## .githubUrl(version)

Resolve the GitHub URL of the changelog for any given version, typically the one you'd reference to in releases.

```js
const url = changelog.githubUrl('v4.2.3')
// -> 'https://github.com/nodejs/node/blob/v4.2.3/CHANGELOG.md'
```

## .rawUrl(version)

Resolve the URL of the raw changelog content for any given version.

```js
const url = changelog.rawUrl('v4.2.3')
// -> 'https://raw.githubusercontent.com/nodejs/node/v4.2.3/CHANGELOG.md'
```

# License

MIT

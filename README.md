# changelog-url

Resolve URLs to the Node.js changelog. Handles legacy versions of Node.js, aswell as io.js and todays Node.js.

## .githubUrl(version)

When you'd like to resolve the GitHub URL of the changelog for any given version, typically the one you'd reference to in releases.

```js
const url = changelog.githubUrl('v4.2.3')
// -> 'https://github.com/nodejs/node/blob/v4.2.3/CHANGELOG.md'
```

## .rawUrl(version)

I you'd like to resolve the URL of the raw changelog for any given version.

```js
const url = changelog.rawUrl('v4.2.3')
// -> 'https://raw.githubusercontent.com/nodejs/node/v4.2.3/CHANGELOG.md'
```

# License

MIT

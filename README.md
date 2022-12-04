# Videogames.pixelastic.com

## Development

This repository holds the code for the static website hosted on
videogames.pixelastic.com

It is an empty shell, that does not contain any assets. Its responsibility is to
build the pages.

Asset manifests are stored in npm packages named
`@pixelastic/videogames-assets-GAMENAME`. Those packages contain
a `manifest.json` with the list of filenames (and optionally the tabs and tab
names to display).

The repositories of those `videogames-assets-*` also contains the actual assets,
but they are not published to npm. Instead, they are pushed on
`assets.pixelastic.com`, a server I own.

## Adding screenshots for a new game

First, create a new private repo with `vdc -p videogames-assets-{gameName}`.

Then, go into `videogames-assets-TEMPLATES` and add a new remote pointing to
this new repo with `vrc {gameName} pixelastic/videogames-assets-{gameName}`.

Fetch that remote with `git fetch {gameName}` and switch to it with `vrs
{gameName}`. You can now push force the template to the new repo with `vbps -f`.

Now, head back to the asset repo, add the required files into `assets/gameplay`
and update the package name in `package.json`.

Run `yarn build` to build the manifest, `yarn deploy` to push files and `yarn
release` to release the npm module.

Once published, you can add the new game to the data of the main website.

# Videogames.pixelastic.com

## Development

This repository holds the code for the static website hosted on
videogames.pixelastic.com

It is an empty shell, that does not contain any assets. Its responsibility is to build the pages.

Asset manifests are stored in npm packages named
`@pixelastic/videogames-assets-GAMENAME`. Those packages contain
a `manifest.json` with the list of filenames (and optionally the tabs and tab
names to display).

The repositories of those `videogames-assets-*` also contains the actual assets,
but they are not published to npm. Instead, they are pushed on
`assets.pixelastic.com`, a server I own.

Whenever I want to add screenshots of a new game, I first need to create a new
`videogames-assets-*` repository. I create a new private repo, then
copy-paste file structure from another asset repository.

I have a `videogames-helper` module that helps
in generating the manifest, uploading the assets and releasing the asset module.

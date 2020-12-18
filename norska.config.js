const _ = require('golgoth/lodash');
const pMap = require('golgoth/pMap');
const games = require('./src/_data/games');
const path = require('path');

module.exports = {
  hooks: {
    async afterHtml({ createPage }) {
      const template = '_includes/templates/game.pug';

      // Update each game to add url to their tabs
      const allGames = _.map(games, (game) => {
        const gameSlug = game.slug;
        const newManifest = _.map(game.manifest, (tab, tabIndex) => {
          const isFirstTab = tabIndex === 0;
          const tabSlug = _.kebabCase(tab.name);
          const destination = isFirstTab
            ? `${gameSlug}/index.html`
            : `${gameSlug}/${tabSlug}/index.html`;
          const url = _.replace(destination, 'index.html', '');

          const anyAsset = tab.files[0];
          const assetDirname = path.dirname(anyAsset);
          const assetPrefix = `${gameSlug}/${assetDirname}`;

          return {
            ...tab,
            url,
            destination,
            assetPrefix,
          };
        });
        return {
          ...game,
          manifest: newManifest,
        };
      });

      // For each game
      await pMap(allGames, async (gameData) => {
        // For each tab
        await pMap(gameData.manifest, async (tab, tabIndex) => {
          const destination = tab.destination;
          const pageData = {
            game: gameData,
            tabIndex,
          };
          await createPage(template, destination, pageData);
        });
      });
    },
  },
};

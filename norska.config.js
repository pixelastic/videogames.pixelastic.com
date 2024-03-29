const _ = require('golgoth/lodash');
const pMap = require('golgoth/pMap');
const games = require('./src/_data/games');
const path = require('path');

module.exports = {
  // We split the Cloudinary load on 5 different accounts to be less likely to
  // hit the limits. I got my main account go overquota twice aready
  cloudinary: [
    'dlq1tdfbf', // neogeo
    'dn98xmodu', // snes
    'dqagu69vh', // genesis
    'dtwfbcblf', // psx
    'dyupzrepd', // gb
  ],
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
            meta: {
              title: `Videogames - ${gameData.name}`,
            },
            game: gameData,
            tabIndex,
          };
          await createPage(template, destination, pageData);
        });
      });
    },
  },
};

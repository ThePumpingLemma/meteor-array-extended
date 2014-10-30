Package.describe({
  name: 'thepumpinglemma:meteor-array-extended',
  summary: 'Meteor package that wraps the array-extended package from NPM.',
  version: '1.0.0',
  git: 'https://github.com/ThePumpingLemma/meteor-array-extended'
});

Npm.depends({
  'array-extended': '0.0.11'
});

Package.onUse(function(api) {
  api.export('ArrayExtended');
  api.addFiles('thepumpinglemma:meteor-array-extended.js');
});


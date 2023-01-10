module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        [
         'module-resolver',
         {
             'root': ['./src/'],
             'extensions': ['js', 'jsx', '.json'],
             'alias': {
                '@assets': './src/Assets',
                 '@components': './src/Components',
                 '@styles': './src/Assets/Styles',
                 '@screens': './src/Screens',
                 '@routes': './src/Routes',
                 '@configs': './src/Config'
             }
         }
        ]
     ],
  };
};

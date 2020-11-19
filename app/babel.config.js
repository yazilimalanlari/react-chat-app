const { join } = require('path');

const src = uri => join(__dirname, 'src', uri);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": src('components'),
          "@styles": src('styles'),
          "@app": src('app'),
          "@icons": src('assets/icons')
        }
      }
    ]
  ]
};

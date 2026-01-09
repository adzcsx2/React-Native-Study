const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });

// Suppress SafeAreaView deprecation warnings
const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes?.('SafeAreaView has been deprecated')) {
    return;
  }
  originalWarn(...args);
};

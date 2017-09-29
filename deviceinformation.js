/**
 * @providesModule react-native-device-information
 */

var RNDeviceInformation = require('react-native').NativeModules.RNDeviceInformation;

module.exports = {
  getUniqueID: function () {
    return RNDeviceInformation.uniqueId;
  },
  getInstanceID: function() {
    return RNDeviceInformation.instanceId;
  },
  getDeviceId: function () {
    return RNDeviceInformation.deviceId;
  },
  getManufacturer: function () {
    return RNDeviceInformation.systemManufacturer;
  },
  getModel: function () {
    return RNDeviceInformation.model;
  },
  getBrand: function () {
    return RNDeviceInformation.brand;
  },
  getSystemName: function () {
    return RNDeviceInformation.systemName;
  },
  getSystemVersion: function () {
    return RNDeviceInformation.systemVersion;
  },
  getBundleId: function() {
    return RNDeviceInformation.bundleId;
  },
  getBuildNumber: function() {
    return RNDeviceInformation.buildNumber;
  },
  getVersion: function() {
    return RNDeviceInformation.appVersion;
  },
  getReadableVersion: function() {
    return RNDeviceInformation.appVersion + "." + RNDeviceInformation.buildNumber;
  },
  getDeviceName: function() {
    return RNDeviceInformation.deviceName;
  },
  getUserAgent: function() {
    return RNDeviceInformation.userAgent;
  },
  getDeviceLocale: function() {
    return RNDeviceInformation.deviceLocale;
  },
  getDeviceCountry: function() {
    return RNDeviceInformation.deviceCountry;
  },
  getTimezone: function() {
    return RNDeviceInformation.timezone;
  },
  isEmulator: function() {
    return RNDeviceInformation.isEmulator;
  },
  isTablet: function() {
    return RNDeviceInformation.isTablet;
  },
  isPinOrFingerprintSet: function () {
    return RNDeviceInformation.isPinOrFingerprintSet;
  },
};

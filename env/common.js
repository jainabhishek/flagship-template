module.exports = {
  /**
   * @todo Replace with your app's internal name
   */
  name: 'FlagshipTemplate',
  /**
   * @todo Replace with your app's user-facing name
   */
  displayName: 'FlagshipTemplate',
  /**
   * @todo Replace with your app's iOS and Android bundle identifier strings
   */
  bundleIds: {
    android: 'com.brandingbrand.reactnative.and.flagshiptemplate',
    ios: 'com.brandingbrand.reactnative.flagshiptemplate',
  },
  /**
   * @todo Provide paths to your build certificates and keystore
   * @see https://github.com/brandingbrand/flagship/wiki/Signing-Your-Apps
   */
  buildConfig: {
    ios: {
      appleCert: '../path/to/apple.cer',
      distCert: '../path/to/dist.cer',
      distP12: '../path/to/dist.p12',
      profilesDir: '../path/to/profiles'
    },
    android: {
      storeFile: '../path/to/store.keystore',
      keyAlias: 'name of alias'
    }
  },
  /**
   * @todo Provide paths to your launch screen assets
   * @see https://github.com/brandingbrand/flagship/wiki/Creating-Launch-Screens
   */
  // launchScreen: {
  //   android: 'assets/launchScreen/android',
  //   ios: {
  //     images: 'assets/launchScreen/ios/LaunchImages.xcassets',
  //     xib: 'assets/launchScreen/ios/LaunchScreen.xib'
  //   }
  // },
  /**
   * @todo Provide assets for your application's homescreen icon
   * @see https://github.com/brandingbrand/flagship/wiki/Creating-App-Icons
   */
  // appIconDir: {
  //   android: 'assets/appIcon/android',
  //   ios: 'assets/appIcon/ios'
  // },
  /**
   * @todo Provide a URL for fallback webview screens
   */
  desktopHost: 'https://www.brandingbrand.com',
  entitlementsFileIOS: './uat.entitlements',
  googleAnalytics: {
    android: '',
    ios: ''
  },
  cmsEnvironment: 1,
  cmsPropertyId: 482,
  apiHost: 'https://api.example.com',
  require: [],
  engagement: {
    baseURL: 'https://api.brandingbrand.com/engagement-general/v1',
    cacheTTL: 0,
    appId: '31c51c2f-e65c-4b14-8edc-026dc6098e56',
    apiKey: 'uWFd0FJ6TcrqFBCFMbd2TUs686K3Ii'
  },
  usageDescriptionIOS: [
    {
      key: 'NSAppleMusicUsageDescription',
      string: ''
    },
    {
      key: 'NSBluetoothPeripheralUsageDescription',
      string: ''
    },
    {
      key: 'NSCalendarsUsageDescription',
      string: ''
    },
    {
      key: 'NSCameraUsageDescription',
      string: ''
    },
    {
      key: 'NSLocationWhenInUseUsageDescription',
      string: ''
    },
    {
      key: 'NSMotionUsageDescription',
      string: ''
    },
    {
      key: 'NSPhotoLibraryAddUsageDescription',
      string: ''
    },
    {
      key: 'NSPhotoLibraryUsageDescription',
      string: ''
    },
    {
      key: 'NSSpeechRecognitionUsageDescription',
      string: ''
    },
    {
      key: 'NSFaceIDUsageDescription',
      string: ''
    }
  ],
  associatedDomains: [],
  targetedDevices: 'Universal',
  enabledCapabilitiesIOS: []
};

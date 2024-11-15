import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www',
  plugins: {
    "SplashScreen": {
      "launchShowDuration": 0,
      "launchAutoHide": false,
      "androidScaleType": "CENTER_CROP",
      "splashImmersive": true,
      "backgroundColor": "#ffffff",
      "androidSplashResourceName": "splash"
    }
  }
};

export default config;

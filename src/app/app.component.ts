import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  async initializeApp() {
    
    this.platform.ready().then(() => {
      if (Capacitor.isNativePlatform()) {
        // Only configure the status bar if running on a native platform
       StatusBar.setStyle({ style: Style.Light });
       StatusBar.setBackgroundColor({color:'white'});
      }
    });
    await this.platform.ready();
    // Keep splash screen visible
    await SplashScreen.show({
      showDuration: 0,
      autoHide: false,
    });
    // Simulate app initialization (replace with your actual initialization logic)
    await this.simulateAppInitialization();
    // Hide splash screen when app is ready
    await SplashScreen.hide();
  }
  private simulateAppInitialization(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating 3 seconds of initialization
  }
}

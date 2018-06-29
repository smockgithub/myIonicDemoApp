import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  window = <any>window;
  isAndroid:boolean;

  constructor(public navCtrl: NavController,platform: Platform) {
    platform.ready().then(() => {
      this.isAndroid = platform.is('android');
    });
  }

  isInstall(){
    if (typeof (<any>window).Wechat === "undefined") {
      console.log("Wechat plugin is not installed.");
      return false;
    }
  }


  startJD(){
    if (typeof this.window.cordova === "undefined") {
      console.log("cordova plugin is not installed.");
      return false;
    }
    var arg0 = "";
    debugger;
    this.window.cordova.plugins.CordovaPluginSmock1.coolMethod(arg0, this.success, this.error)
  }

  success(msg) {
    debugger;
    alert('success:'+msg);
  }
  error(msg) {
    debugger;
    alert('error:'+msg);
  }


  updateApp(){
    if(this.isAndroid){
      debugger;
      this.window.DownInstall.autoDInstallAPK(["newapp",    //your app fileName
                    "http://reg.wabaoge.com/assets/test.apk",    //your apk download url
                    "app download",   //your apk download description
                    "new app downloading"],   //your apk download title
                    function(ok) {
                      debugger;
                    },
                    function(error) {
                      debugger;
                       if("permission refused"==error){
                          alert("permission refused");
                        }
                    });

    }
  }


}

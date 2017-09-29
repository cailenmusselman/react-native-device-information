# react-native-device-information

[![npm version](https://badge.fury.io/js/react-native-device-info.svg)](http://badge.fury.io/js/react-native-device-info)

Device Information for [React Native](https://github.com/facebook/react-native)

Note this is a folk of [react-native-device-info](https://github.com/rebeccahughes/react-native-device-info). Full credit to them.
With the modification that it doesnt require the depency for

``` java
    compile 'com.google.android.gms:play-services-gcm:+'
```

so that it doesnt conflict with firebase.

Also it was fun for me to get stuck into a react native module and make some changes :)

I havent tested on windows or ios...

## Install

```shell
npm install --save react-native-device-information
```

#### RN > 0.47 use 0.11 or higher

## Automatically link

#### With React Native 0.27+

```shell
react-native link react-native-device-info
```

#### With older versions of React Native

You need [`rnpm`](https://github.com/rnpm/rnpm) (`npm install -g rnpm`)

```shell
rnpm link react-native-device-information
```

## Manually link

### iOS (via Cocoa Pods)
Add the following line to your build targets in your `Podfile`

`pod 'RNDeviceInformation', :path => '../node_modules/react-native-device-info'`

Then run `pod install`

### iOS (without Cocoa Pods)

In XCode, in the project navigator:
- Right click _Libraries_
- Add Files to _[your project's name]_
- Go to `node_modules/react-native-device-info`
- Add the `.xcodeproj` file

In XCode, in the project navigator, select your project.
- Add the `libRNDeviceInformation.a` from the _deviceinfo_ project to your project's _Build Phases ➜ Link Binary With Libraries_
- Click `.xcodeproj` file you added before in the project navigator and go the _Build Settings_ tab. Make sure _All_ is toggled on (instead of _Basic_).
- Look for _Header Search Paths_ and make sure it contains both `$(SRCROOT)/../react-native/React` and `$(SRCROOT)/../../React`
- Mark both as recursive (should be OK by default).

Run your project (Cmd+R)

(Thanks to @brysgo for writing the instructions)

### Android

- in `android/app/build.gradle`:

```diff
dependencies {
    ...
    compile "com.facebook.react:react-native:+"  // From node_modules
+   compile project(':react-native-device-information')
}
```

- in `android/settings.gradle`:

```diff
...
include ':app'
+ include ':react-native-device-information'
+ project(':react-native-device-information').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-device-information/android')
```

#### With React Native 0.29+

- in `MainApplication.java`:

```diff
+ import net.gen10.RNDeviceInformation.RNDeviceInformation;

  public class MainApplication extends Application implements ReactApplication {
    //......

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
+         new RNDeviceInformation(),
          new MainReactPackage()
      );
    }

    ......
  }
```

#### With older versions of React Native:

- in `MainActivity.java`:

```diff
+ import com.learnium.RNDeviceInformation.RNDeviceInfo;

  public class MainActivity extends ReactActivity {
    ......

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
+       new RNDeviceInformation(),
        new MainReactPackage()
      );
    }
  }
```

(Thanks to @chirag04 for writing the instructions)

### Windows
- Open the solution in Visual Studio for your Windows apps
- right click your in the Explorer and click Add > Existing Project...
- Navigate to `./<app-name>/node_modules/react-native-device-info/windows/RNDeviceInformation` and add `RNDeviceInformation.csproj`
- this time right click on your React Native Windows app under your solutions directory and click Add > Reference...
- check the `RNDeviceInfo` you just added and press ok
- open up `MainPage.cs` for your app and edit the file like so:

```diff
+ using RNDeviceInformation;
......
            get
            {
                return new List<IReactPackage>
                {
                    new MainReactPackage(),
+                   new RNDeviceInformationPackage(),
                };
            }
```

(Thanks to @josephan for writing the instructions)

## Device Name

If you want to get the device name in Android add this to your `AndroidManifest.xml` (optional):

```xml
...
<uses-permission android:name="android.permission.BLUETOOTH"/>
```

## Release Notes

See [CHANGELOG.md](https://github.com/rebeccahughes/react-native-device-info/blob/master/CHANGELOG.md)

## Example

```js
var DeviceInformation = require('react-native-device-information');
// or import DeviceInfo from 'react-native-device-info';
```

| Name                       | Method                           | Return                                                                                        | Notes                                                                                                            |
| :------------------------- | :------------------------------- | :-------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| Device Unique ID           | `getUniqueID()`                  | FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9                                                          | This is IDFV on iOS so it will change if all apps from the current apps vendor have been previously uninstalled. |
| Device Manufacturer        | `getManufacturer()`              | Apple                                                                                         |                                                                                                                  |
| Device Brand               | `getBrand()`                     | Apple / htc / Xiaomi                                                                          |                                                                                                                  |
| Device Model               | `getModel()`                     | iPhone 6                                                                                      |                                                                                                                  |
| Device ID                  | `getDeviceId()`                  | iPhone7,2                                                                                     | Or the board on Android e.g. goldfish                                                                            |
| System Name                | `getSystemName()`                | iPhone OS                                                                                     |                                                                                                                  |
| System Version             | `getSystemVersion()`             | 9.0                                                                                           |                                                                                                                  |
| Bundle ID                  | `getBundleId()`                  | com.learnium.mobile                                                                           |                                                                                                                  |
| Build Number               | `getBuildNumber()`               | 89                                                                                            |                                                                                                                  |
| App Version                | `getVersion()`                   | 1.1.0                                                                                         |                                                                                                                  |
| App Version (Readable)     | `getReadableVersion()`           | 1.1.0.89                                                                                      |                                                                                                                  |
| Device Name                | `getDeviceName()`                | Becca's iPhone 6                                                                              |                                                                                                                  |
| User Agent                 | `getUserAgent()`                 | Dalvik/2.1.0 (Linux; U; Android 5.1; Google Nexus 4 - 5.1.0 - API 22 - 768x1280 Build/LMY47D) |                                                                                                                  |
| Device Locale              | `getDeviceLocale()`              | en-US                                                                                         |                                                                                                                  |
| Device Country             | `getDeviceCountry()`             | US                                                                                            |                                                                                                                  |
| Timezone                   | `getTimezone()`                  | America/Mexico_City                                                                           |                                                                                                                  |
| App Instance ID            | `getInstanceID()`                |                                                                                               | ANDROID ONLY - see https://developers.google.com/instance-id/                                                    |
| App is running in emulator | `isEmulator()`                   | true                                                                                          | if app is running in emulator return true                                                                        |
| App is running on a tablet | `isTablet()`                     | true                                                                                          | if app is running on a tablet return true                                                                        |
| PIN or fingerprint set     | `isPinOrFingerprintSet(callback)`|                                                                                               | Only supported in Android and iOS 9.0 and above

Since the device setting for PIN/Fingerprint can be modified while the app is still open, this is available via callback instead of as a constant.  To use, pass a callback function in your javascript:

```js
RNDeviceInformation.isPinOrFingerprintSet(isPinOrFingerprintSet => {
  if (!isPinOrFingerprintSet) {
    ...
  }
}
```

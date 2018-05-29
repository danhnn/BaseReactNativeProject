# React Native Base Project

## How to run this project? 

1. Setup `react-native` project with Native Code here [[Getting Started]](http://facebook.github.io/react-native/docs/getting-started.html).
2. Go to its root folder and run `yarn` or `npm install`. I prefer `yarn` (from facebook) for better speed.
3. Open terminla, run `npm run iosDev` (for iOS) or `npm run androidDev` (for Android).
4. Enjoy.

### Note for iOS:
- The iOS project using cocoa pod for dependencies management then we need to run
+ cd /ios && pod install --> to install dependencies libraries.

# Library using in this base project:
`redux` : For state management
`redux-saga` : For side effect
`react-navigation` : For navigation stuff
`react-native-config` : For config different enviroment
`react-native-i18n` : For localization
`redux-persist` : For persist app's store
`react-native-popup-dialog` : For rendering popup dialog
`react-native-spinkit` : For loading indicator
`axios` : For HTTP Request

## License

    Copyright 2018

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
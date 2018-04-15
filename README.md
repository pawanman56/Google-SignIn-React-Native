# Google SignIn in React Native App
This is a simple app that has Google OAuth SignIn.

### Get Started
1. Clone this repository:
```
git clone git@github.com:pawanman56/Google-SignIn-React-Native.git
```

2. Install dependencies (Make sure you already have `nodejs` and `npm` installed):
```
npm install    //or yarn
```

3. Run it:
```
npm start    //or yarn start
```

### Steps
Each steps are branch that will guide you to how to setup **Google SignIn** in your **React Native app**, step by step.

* [Initial step][0]:  Set up app `react-native init *YourAppName*`
* [Step-1][1]:  Install `react-native-google-signin`

    ```
    npm i --save react-native-google-signin

    react-native link react-native-google-signin
    ```
* [Step-2][2]: Add main file:
	* Create file `App.js` in new folder `app` in your project directory.
	* Reference your main file in `index.js`.
* [Step-3][3]: Render Google SignIn button:
  * In your `App.js` file, render the button for **Google SignIn**. You can view the code in commit of this step.
* [Step-4][4]: Setup and Initialize your project:
  * Follow the documentation for [Android][android] and [IOS][ios]. (this project focus on android)
  * **First**: Get SHA1 fingerprint in your local machine.
    ```
    keytool -list -v -keystore ~/.android/debug.keystore
    ```
  * **Second**: Add new project in you Firebase Console.

    * `Project Overview` > `Project Setting`
    
    * Add App in `Your App`. Fill up the required fields and `Register App`.

    * Then download config file `google-service.json`.

    * Move the `google-service.json` file in `android`>`app`.

[0]: https://github.com/pawanman56/Google-SignIn-React-Native/commits/step-0
[1]: https://github.com/pawanman56/Google-SignIn-React-Native/commits/step-1
[2]: https://github.com/pawanman56/Google-SignIn-React-Native/commits/step-2
[3]: https://github.com/pawanman56/Google-SignIn-React-Native/commits/step-3
[4]: https://github.com/pawanman56/Google-SignIn-React-Native/commits/step-4

[android]: https://github.com/devfd/react-native-google-signin/blob/master/android-guide.md
[ios]: https://github.com/devfd/react-native-google-signin/blob/master/ios-guide.md
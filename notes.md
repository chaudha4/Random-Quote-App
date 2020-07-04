
## How I installed ##

    chaudha4@abhishek-Lenovo-ubuntu:~/projects/android$ expo init AwesomeProject


To run your project, navigate to the directory and run one of the following npm commands.

- cd AwesomeProject
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npm run android
- npm run ios # requires an iOS device or macOS for access to an iOS simulator
- npm run web


## To Run ##
    chaudha4@abhishek-Lenovo-ubuntu:~/projects/android/AwesomeProject$ npm start

    > @ start /home/chaudha4/projects/android/AwesomeProject
    > expo start

    Starting project at /home/chaudha4/projects/android/AwesomeProject
    Expo DevTools is running at http://localhost:19002
    Opening DevTools in the browser... (press shift-d to disable)
    Starting Metro Bundler on port 19001.

    exp://192.168.2.173:19000

## Build APK
    Run "sudo expo build"

## Android credentials ##
    chaudha4@abhishek-Lenovo-ubuntu:~/projects/android/AwesomeProject$ expo fetch:android:keystore
    Configuring credentials for chaudha4 in project RandomQuotes
    Saving Keystore to /home/chaudha4/projects/android/AwesomeProject/RandomQuotes.jks
    Keystore credentials
    Keystore password: c26b426a629e493485566ad5bb245665
    Key password:      58af1f69a20b4a14afa73b75a627997c

    Path to Keystore:  /home/chaudha4/projects/android/AwesomeProject/RandomQuotes.jks    